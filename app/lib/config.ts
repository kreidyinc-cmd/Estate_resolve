const baseServicePackages = [
  {
    description:
      "UK financial asset enquiries covering banks and building societies, pensions, insurers, investment providers, NS&I and unclaimed court funds.",
    label: "Standard Estate Search",
    price: "£175",
    hideFeeInOptionList: false,
    priceLabel: "£175 total fee",
    pricePence: 17500,
    value: "standard_estate_search",
  },
  {
    description:
      "Includes the Standard Estate Search, targeted share-registrar enquiries where there is a usable lead, review of available address history, relevant judgment, insolvency and company records, and credit-reference and OPG enquiries where appropriate, subject to authority documents and the organisation's requirements. Specialist share tracing and formal address tracing can be quoted separately where needed.",
    label: "Asset & Liability Search",
    price: "£210",
    hideFeeInOptionList: false,
    priceLabel: "£210 total fee",
    pricePence: 21000,
    value: "asset_liability_search",
  },
  {
    description:
      "Includes the UK search and relevant Asset & Liability Search coverage, plus searches of relevant official unclaimed-asset registers in France, Australia, Canada and, where relevant, the United States and New Zealand. Direct overseas institution enquiries and specialist work are separately scoped.",
    label: "International Estate Search",
    price: "£350",
    hideFeeInOptionList: false,
    priceLabel: "£350 total fee",
    pricePence: 35000,
    value: "international_estate_search",
  },
] as const;

function formatPenceAsGbp(pricePence: number) {
  return new Intl.NumberFormat("en-GB", {
    currency: "GBP",
    style: "currency",
  }).format(pricePence / 100);
}

function getOptionalTestPaymentOption() {
  if (process.env.NEXT_PUBLIC_TEST_PAYMENT_OPTION_ENABLED !== "true") {
    return null;
  }

  const parsedPricePence = Number.parseInt(
    process.env.NEXT_PUBLIC_TEST_PAYMENT_OPTION_PRICE_PENCE || "",
    10,
  );

  if (
    !Number.isFinite(parsedPricePence) ||
    parsedPricePence < 100 ||
    parsedPricePence > 500
  ) {
    return null;
  }

  return {
    description:
      "Temporary low-value option for verifying the live Stripe payment flow.",
    label: "System Verification – Do Not Purchase",
    price: formatPenceAsGbp(parsedPricePence),
    hideFeeInOptionList: true,
    priceLabel: `${formatPenceAsGbp(parsedPricePence)} total fee`,
    pricePence: parsedPricePence,
    value: "payment_verification",
  } as const;
}

const testPaymentOption = getOptionalTestPaymentOption();
const servicePackages = testPaymentOption
  ? [...baseServicePackages, testPaymentOption]
  : baseServicePackages;

const productionSiteUrl = "https://www.estateresolve.co.uk";

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return productionSiteUrl;
  }

  try {
    const parsedUrl = new URL(configuredUrl);
    const hostname = parsedUrl.hostname.toLowerCase();

    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "estateresolve.co.uk" ||
      hostname === "www.estateresolve.co.uk"
    ) {
      return parsedUrl.toString().replace(/\/$/, "");
    }
  } catch {
    return productionSiteUrl;
  }

  return productionSiteUrl;
}

export const config = {
  site: {
    name: "Estate Resolve",
    url: resolveSiteUrl(),
    description:
      "Professional estate financial search services for families and executors across England, Wales and Scotland.",
  },
  company: {
    legalName: "AR Gravitas Ltd",
    companyNumber: "16340531",
    jurisdiction: "England and Wales",
    tradingName: "Estate Resolve",
    fullLegalName:
      "AR Gravitas Ltd (Companies House No. 16340531), registered in England and Wales, trading as Estate Resolve",
  },
  contact: {
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@estateresolve.co.uk",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "020 3951 5065",
    phoneHref: `tel:${(process.env.NEXT_PUBLIC_CONTACT_PHONE || "020 3951 5065").replace(/[^\d]/g, "")}`,
    address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
    addressLines: [
      "71-75 Shelton Street",
      "Covent Garden",
      "London",
      "WC2H 9JQ",
    ],
    officeHours: "Monday to Friday, 9:00 to 17:30",
    serviceArea: "England, Wales and Scotland",
  },
  pricing: {
    fixedFee: "£175",
    servicePackages,
    testPaymentOptionEnabled: Boolean(testPaymentOption),
  },
  timeline: {
    initialReport:
      "We aim to issue an initial report within 30 days of receiving the required documents, with any outstanding enquiries shown in the report.",
  },
} as const;
