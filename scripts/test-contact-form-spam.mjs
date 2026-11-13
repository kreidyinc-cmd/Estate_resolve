import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL("../", import.meta.url));
const validEnquiry = {
  name: "Anne O'Neill",
  email: "anne@example.com",
  message:
    "I am the executor of my father's estate. Can you help trace his savings and explain which documents you need?",
  website: "",
};

// Exercise the real route, schema and email templates. Only the email transport
// is replaced, so these tests cannot contact SMTP or send real enquiries.
function loadContactRoute() {
  const emails = [];
  const modules = new Map();
  const fakeEmail = {
    getAdminAddress: () => "admin@example.test",
    sendEmail: async (email) => { emails.push(email); },
  };

  function load(relativePath) {
    const filename = path.join(root, relativePath);
    if (modules.has(filename)) return modules.get(filename).exports;
    const loadedModule = { exports: {} };
    modules.set(filename, loadedModule);
    const { outputText } = ts.transpileModule(readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
      fileName: filename,
    });
    vm.runInNewContext(outputText, {
      module: loadedModule,
      exports: loadedModule.exports,
      process,
      URL,
      require(specifier) {
        if (specifier === "@/app/lib/email") return fakeEmail;
        if (specifier.startsWith("@/")) return load(specifier.slice(2) + ".ts");
        return require(specifier);
      },
    }, { filename });
    return loadedModule.exports;
  }

  return { POST: load("app/api/send-contact-form/route.ts").POST, emails };
}

async function submit(body, { raw = false } = {}) {
  const { POST, emails } = loadContactRoute();
  const request = new Request("http://localhost/api/send-contact-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw ? body : JSON.stringify(body),
  });
  const response = await POST(request);
  return { status: response.status, body: await response.json(), emails };
}

async function expectBlocked(payload, options) {
  const result = await submit(payload, options);
  assert.equal(result.status, 400);
  assert.equal(result.body.success, false);
  assert.equal(typeof result.body.message, "string");
  assert.equal(result.emails.length, 0, "Rejected submissions must send ZERO emails");
}

async function expectAccepted(payload) {
  const result = await submit(payload);
  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(result.emails.length, 2);
  const confirmation = result.emails.find(e => e.subject === "We have received your message");
  const admin = result.emails.find(e => e.subject === "New Estate Resolve Contact Enquiry");
  assert.equal(confirmation?.to, payload.email.trim());
  assert.match(confirmation.html, /Thank you for contacting Estate Resolve/);
  assert.equal(admin?.to, "admin@example.test");
  assert.equal(admin?.replyTo, payload.email.trim());
  assert.match(admin.html, /New contact enquiry/);
  assert.equal(admin.html.includes("Leave this field empty"), false);
}

test("legitimate contact enquiry preserves both emails", async () => {
  await expectAccepted(validEnquiry);
});

test("a normal URL in an estate enquiry is allowed", async () => {
  await expectAccepted({ ...validEnquiry, message: validEnquiry.message + " This is the provider: https://example.com/pensions." });
});

test("several provider URLs with genuine explanatory prose are allowed", async () => {
  const links = Array.from({ length: 6 }, (_, i) => "https://provider" + i + ".example/accounts").join("\n");
  await expectAccepted({ ...validEnquiry, message: validEnquiry.message + " These are the providers mentioned in his paperwork:\n" + links });
});

test("estate, debt, investment and international terminology is not keyword-blocked", async () => {
  await expectAccepted({ ...validEnquiry, name: "José D'Arcy", message: "The estate includes cryptocurrency investments, an overseas bank account, gambling debts and a disputed inheritance. Can you explain the available searches?" });
});

test("filled honeypot is checked before Zod could strip it", async () => {
  await expectBlocked({ ...validEnquiry, website: "https://automated.example/" });
});

test("direct API script omitting the honeypot marker is rejected", async () => {
  const { name, email, message } = validEnquiry;
  await expectBlocked({ name, email, message });
});

for (const [label, value] of [
  ["spaces", "   "], ["null", null], ["number", 0], ["false", false],
  ["array", []], ["object", {}],
]) {
  test("invalid honeypot value: " + label, async () => {
    await expectBlocked({ ...validEnquiry, website: value });
  });
}

for (const [label, message] of [
  ["URL-only link dump", Array.from({ length: 6 }, (_, i) => "https://offers.example/promotion/" + i).join(" ")],
  ["HTML link spam", 'Offers: <a href="https://offers.example/one">one</a> <a href="https://offers.example/two">two</a>'],
  ["BBCode link spam", "[url=https://offers.example/one]one[/url] [url]https://offers.example/two[/url]"],
  ["mixed link markup", '<A HREF="https://offers.example/one">one</A> [URL=https://offers.example/two]two[/URL]'],
]) {
  test(label + " is rejected before either email", async () => {
    await expectBlocked({ ...validEnquiry, message });
  });
}

for (const [label, payload] of [
  ["null", null], ["array", []], ["string", "message"], ["number", 1],
  ["missing fields", { website: "" }],
  ["invalid email", { ...validEnquiry, email: "invalid" }],
  ["short message", { ...validEnquiry, message: "hi" }],
  ["non-string message", { ...validEnquiry, message: {} }],
  ["oversized message", { ...validEnquiry, message: "x".repeat(2001) }],
]) {
  test("malformed payload: " + label, async () => {
    await expectBlocked(payload);
  });
}

for (const [label, body] of [["broken JSON", "{invalid"], ["empty body", ""], ["form-encoded body", "name=Bot&email=bot%40example.com"]]) {
  test(label + " returns 400 without sending email", async () => {
    await expectBlocked(body, { raw: true });
  });
}

test("known limitation: a bot with an empty marker and ordinary prose is indistinguishable", async () => {
  await expectAccepted({ ...validEnquiry, message: "Please contact me with details of your asset search services." });
});
