import type { APIRoute } from "astro";
import { getPostUrl, getTags, type Post } from "../lib/posts";

const posts = Object.values(import.meta.glob("./posts/*.md", { eager: true })) as Post[];
const staticPaths = ["/", "/posts/", "/tags/", "/about/"];

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  })[character]!);
}

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("http://localhost:4321");
  const paths = [
    ...staticPaths,
    ...posts.map(getPostUrl),
    ...getTags(posts).map((tag) => `/tags/${tag.slug}/`)
  ];
  const urls = [...new Set(paths)]
    .map((path) => `  <url><loc>${escapeXml(new URL(path, base).href)}</loc></url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
