import type { BlogPostSummary } from "@/app/lib/blog";
import { config } from "@/app/lib/config";

type JsonLdNode = {
  "@type": string;
  "@id"?: string;
  [property: string]: unknown;
};

export type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

const homeUrl = new URL("/", config.site.url).toString();
const organizationId = new URL("#organization", homeUrl).toString();
const websiteId = new URL("#website", homeUrl).toString();
const organizationReference = { "@id": organizationId };

// Define this identity once per page graph; provider/publisher use references.
const organization: JsonLdNode = {
  "@type": "Organization",
  "@id": organizationId,
  name: config.company.tradingName,
  legalName: config.company.legalName,
  url: homeUrl,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Companies House company number",
    value: config.company.companyNumber,
  },
  email: config.contact.email,
  telephone: config.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: config.contact.addressLines.slice(0, 2).join(", "),
    addressLocality: config.contact.addressLines[2],
    postalCode: config.contact.addressLines[3],
    addressCountry: "GB",
  },
};

function graph(...nodes: JsonLdNode[]): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [organization, ...nodes],
  };
}

function absoluteHttpUrl(value?: string) {
  if (!value?.trim()) return undefined;

  try {
    const url = new URL(value.trim(), homeUrl);
    if (
      (url.protocol !== "https:" && url.protocol !== "http:") ||
      url.username ||
      url.password
    ) {
      return undefined;
    }
    return url.toString();
  } catch {
    return undefined;
  }
}

function publicationDate(value: string | Date) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;

  // Preserve date-only precision instead of supplying an invented publish time.
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return date.toISOString().slice(0, 10) === value ? value : undefined;
  }
  return date.toISOString();
}

function breadcrumbs(
  pageUrl: string,
  items: { name: string; url: string }[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": new URL("#breadcrumb", pageUrl).toString(),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function homeStructuredData(): JsonLdGraph {
  return graph({
    "@type": "WebSite",
    "@id": websiteId,
    name: config.site.name,
    url: homeUrl,
    publisher: organizationReference,
    inLanguage: "en-GB",
  });
}

export function servicesStructuredData(): JsonLdGraph {
  const pageUrl = new URL("/services", homeUrl).toString();

  return graph(
    {
      "@type": "Service",
      "@id": new URL("#service", pageUrl).toString(),
      name: "Financial Asset Searches for Deceased Estates",
      serviceType: "Deceased estate financial asset search",
      description:
        "Estate Resolve helps authorised executors, administrators and professional representatives make structured enquiries about financial assets that may need to be considered when administering an estate.",
      url: pageUrl,
      provider: organizationReference,
      areaServed: config.contact.serviceArea
        .split(/,|\band\b/)
        .map((name) => ({
          "@type": "AdministrativeArea",
          name: name.trim(),
        })),
    },
    breadcrumbs(pageUrl, [
      { name: "Home", url: homeUrl },
      { name: "Services", url: pageUrl },
    ]),
  );
}

export function blogPostStructuredData(post: BlogPostSummary): JsonLdGraph {
  // Follow the same canonical/slug precedence as the article's metadata.
  const routeUrl = new URL(
    `/blog/${post.seo?.slug || post.slug}`,
    homeUrl,
  ).toString();
  const pageUrl = absoluteHttpUrl(post.seo?.canonical) || routeUrl;
  const image = absoluteHttpUrl(post.image);
  const datePublished = publicationDate(post.date);

  return graph(
    {
      "@type": "BlogPosting",
      "@id": new URL("#blogposting", pageUrl).toString(),
      headline: post.title,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      ...(datePublished ? { datePublished } : {}),
      ...(image ? { image } : {}),
      publisher: organizationReference,
      inLanguage: "en-GB",
    },
    breadcrumbs(pageUrl, [
      { name: "Home", url: homeUrl },
      { name: "Blog", url: new URL("/blog", homeUrl).toString() },
      { name: post.title, url: pageUrl },
    ]),
  );
}

export function serializeJsonLd(data: JsonLdGraph): string {
  // JSON.stringify alone allows a CMS string containing </script> to end the tag.
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
