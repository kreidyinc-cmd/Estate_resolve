import { NextResponse } from "next/server";
import {
  buildContactAdminEmail,
  buildContactConfirmationEmail,
} from "@/app/lib/email-templates";
import { contactFormSchema } from "@/app/lib/validation";
import { getAdminAddress, sendEmail } from "@/app/lib/email";

function isObviousLinkSpam(message: string) {
  // This is a plain-text enquiry form. Repeated link markup is a common
  // automated payload; ordinary URLs and estate-related words remain allowed.
  const htmlLinks = message.match(/<a\b[^>]*\bhref\s*=/gi) || [];
  const forumLinks = message.match(/\[url(?:=|\])/gi) || [];

  if (htmlLinks.length + forumLinks.length >= 2) {
    return true;
  }

  const urlPattern = /(?:https?:\/\/|www\.)[^\s<>"']+/gi;
  const urls = message.match(urlPattern) || [];
  const prose = message.replace(urlPattern, "").replace(/[^\p{L}\p{N}]/gu, "");
  const urlLength = urls.reduce((length, url) => length + url.length, 0);

  // Require several links AND almost no explanation; a genuine enquiry can
  // contain multiple provider URLs without being rejected for its link count.
  return urls.length >= 5 && prose.length < 40 && urlLength / message.length > 0.8;
}

function rejectContactSubmission() {
  return NextResponse.json(
    {
      message:
        "We could not accept this message. Please reload the contact page and send a plain-text enquiry, or use the email or telephone details on this page.",
      success: false,
    },
    { status: 400 },
  );
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json().catch(() => null);

    // Check the raw payload before Zod strips the honeypot as an unknown key.
    // Requiring the empty field also rejects basic scripts posting only the
    // public fields. This is not proof that the sender is human.
    if (
      !payload ||
      typeof payload !== "object" ||
      Array.isArray(payload) ||
      !("website" in payload) ||
      payload.website !== ""
    ) {
      return rejectContactSubmission();
    }

    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Please check the contact form details and try again.",
          success: false,
        },
        { status: 400 },
      );
    }

    const submission = parsed.data;

    if (isObviousLinkSpam(submission.message)) {
      return rejectContactSubmission();
    }

    await Promise.all([
      sendEmail({
        html: buildContactConfirmationEmail(submission),
        subject: "We have received your message",
        to: submission.email,
      }),
      sendEmail({
        html: buildContactAdminEmail(submission),
        replyTo: submission.email,
        subject: "New Estate Resolve Contact Enquiry",
        to: getAdminAddress(),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "We could not send your message.",
        success: false,
      },
      { status: 500 },
    );
  }
}
