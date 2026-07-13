import rss from "@astrojs/rss";
import { SITE } from "../consts";
import { getPostUrl } from "../lib/posts";

export async function GET(context) {
  const posts = Object.values(import.meta.glob("./posts/*.md", { eager: true }))
    .filter((post) => post.frontmatter)
    .sort((a, b) => +new Date(b.frontmatter.pubDate) - +new Date(a.frontmatter.pubDate));

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    customData: "<language>zh-CN</language>",
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
      link: getPostUrl(post),
      categories: post.frontmatter.tags
    }))
  });
}
