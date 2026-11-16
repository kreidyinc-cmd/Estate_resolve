import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/app/lib/blog";
import { config } from "@/app/lib/config";
import { RESOURCE_CATEGORY_LINKS, getAllResources } from "@/app/lib/resources";

const routes = [
  "",
  "/about",
  "/blog",
  "/book-a-consultation",
  "/contact",
  "/faqs",
  "/how-it-works",
  "/privacy",
  "/pricing",
  "/personal-asset-search",
  "/resources",
  "/sample-reports",
  "/services",
  "/solicitors",
  "/start-a-case",
  "/terms",
];

/**
 * A CMS "Canonical URL" override means the entry has designated a different
 * page as authoritative, so its own URL shouldn't be listed as indexable.
 */
function isSelfCanonical(path: string, canonical?: string) {
  if (!canonical) return true;
  return new URL(canonical, config.site.url).toString() ===
    new URL(path, config.site.url).toString();
}

function contentLastModified(published: unknown, updated: unknown, now: number) {
  // A blank CMS field means no recorded revision. An invalid explicit revision
  // must not silently fall back to an older publication date.
  const value = updated == null || (typeof updated === "string" && !updated.trim())
    ? published
    : updated;

  // gray-matter can return a Date for an unquoted YAML timestamp.
  if (!(value instanceof Date) && typeof value !== "string") return undefined;
  if (typeof value === "string" &&
    !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)) {
    return undefined;
  }

  const date = value instanceof Date ? value : new Date(value);
  if (!Number.isFinite(date.getTime()) || date.getTime() > now) return undefined;

  // Reject impossible calendar dates that Date would otherwise roll forward.
  if (typeof value === "string") {
    const day = value.slice(0, 10);
    if (new Date(`${day}T00:00:00Z`).toISOString().slice(0, 10) !== day) {
      return undefined;
    }
  }
  return date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // The clock only rejects future dates; it is never emitted as a lastmod.
  const now = Date.now();

  // Omit lastmod where there is no maintained record of substantial changes.
  const staticEntries = routes.map((route) => ({
    url: `${config.site.url}${route}`,
  }));

  const blogEntries = getAllBlogPosts()
    .filter((post) => isSelfCanonical(`/blog/${post.slug}`, post.seo?.canonical))
    .map((post) => ({
      url: `${config.site.url}/blog/${post.slug}`,
      lastModified: contentLastModified(post.date, post.updated, now),
    }));

  const resourceCategoryEntries = RESOURCE_CATEGORY_LINKS.map(({ slug }) => ({
    url: `${config.site.url}/resources/category/${slug}`,
  }));

  const resourceEntries = getAllResources()
    .filter((resource) =>
      isSelfCanonical(`/resources/${resource.slug}`, resource.seo?.canonical),
    )
    .map((resource) => ({
      url: `${config.site.url}/resources/${resource.slug}`,
      lastModified: contentLastModified(resource.date, resource.updated, now),
    }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...resourceCategoryEntries,
    ...resourceEntries,
  ];
}
