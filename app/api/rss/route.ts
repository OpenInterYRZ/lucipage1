import RSS from "rss";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://luci.com";

  const feed = new RSS({
    title: "LUCI Blog",
    description: "Updates, tutorials, and insights from the LUCI team.",
    site_url: `${baseUrl}/blog`,
    feed_url: `${baseUrl}/api/rss`,
    language: "en",
  });

  const posts = getAllPosts();

  for (const post of posts) {
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${baseUrl}/blog/${post.slug}`,
      date: new Date(post.frontmatter.date),
      author: post.frontmatter.author,
      categories: post.frontmatter.tags,
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
