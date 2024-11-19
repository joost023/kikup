import type { Post } from "../types/blog";
import { blogPosts } from "../data/blogs";

export async function getBlogPosts(): Promise<Post[]> {
  return blogPosts;
}

export async function getBlogPost(id: string): Promise<Post | null> {
  const post = blogPosts.find(post => post.id === id);
  return post || null;
}