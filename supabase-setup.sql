-- =============================================
-- PLAYZOR BLOG - SUPABASE DATABASE SETUP
-- Run this SQL in your Supabase SQL Editor
-- =============================================

-- 1. Create the blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL DEFAULT 'Guides',
  author TEXT NOT NULL DEFAULT 'Playzor Team',
  read_time TEXT NOT NULL DEFAULT '5 min read',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);

-- 3. Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- 4. Allow public read access for published posts
CREATE POLICY "Public can read published blogs"
  ON blogs
  FOR SELECT
  USING (published = true);

-- 5. Allow full access with anon key (admin auth handled by app)
CREATE POLICY "Allow all operations for authenticated requests"
  ON blogs
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 6. Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- STORAGE SETUP (Run in Supabase Dashboard)
-- =============================================
-- 1. Go to Storage in Supabase Dashboard
-- 2. Create a new bucket called "blog-images"
-- 3. Set it as PUBLIC bucket
-- 4. Add policy: Allow public read (SELECT) for everyone
-- 5. Add policy: Allow upload (INSERT) for everyone (anon key)
-- 6. Add policy: Allow delete (DELETE) for everyone (anon key)
--
-- Or run these storage policies:

-- INSERT INTO storage.buckets (id, name, public) 
-- VALUES ('blog-images', 'blog-images', true);
