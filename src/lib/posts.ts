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

export function getTagSlug(tag: string) {
  return tag.trim().toLowerCase().replace(/\s+/g, "-");
}

export function getTags(posts: Post[]) {
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.frontmatter.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, slug: getTagSlug(name) }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
