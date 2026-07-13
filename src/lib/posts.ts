export type Post = {
  frontmatter: {
    title: string;
    description: string;
    pubDate: Date | string;
    updatedDate?: Date | string;
    tags?: string[];
  };
  url: string;
};

export function sortPosts(posts: Post[]) {
  return posts.sort(
    (a, b) => +new Date(b.frontmatter.pubDate) - +new Date(a.frontmatter.pubDate)
  );
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(date));
}

export function getPostUrl(post: Post) {
  return post.url.endsWith("/") ? post.url : `${post.url}/`;
}

export function getTagSlug(tag: string) {
  const slug = tag
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

  if (!slug) throw new Error(`标签无法生成 slug：${tag}`);
  return slug;
}

export function getTags(posts: Post[]) {
  const tags = new Map<string, { name: string; count: number }>();

  for (const post of posts) {
    for (const tag of post.frontmatter.tags ?? []) {
      const slug = getTagSlug(tag);
      const current = tags.get(slug);
      tags.set(slug, { name: current?.name ?? tag, count: (current?.count ?? 0) + 1 });
    }
  }

  return [...tags.entries()]
    .map(([slug, tag]) => ({ ...tag, slug }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
