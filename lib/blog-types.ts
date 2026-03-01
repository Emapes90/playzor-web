export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image_url: string | null;
  category: string;
  author: string;
  read_time: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  image_url: string;
  category: string;
  author: string;
  read_time: string;
  published: boolean;
}

export const BLOG_CATEGORIES = [
  "Guides",
  "Security",
  "Updates",
  "Tutorials",
  "News",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
