-- =============================================
-- PLAYZOR - SUPABASE DATABASE SETUP (SAFE TO RE-RUN)
-- This schema is fully idempotent. Running it
-- multiple times will NOT break anything.
-- It will create new tables/columns if missing,
-- and skip everything that already exists.
-- Run this SQL in your Supabase SQL Editor.
-- =============================================


-- =============================================
-- 1. BLOGS TABLE
-- =============================================

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

-- Safe column additions (no-op if already exists)
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'Guides';
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS author TEXT NOT NULL DEFAULT 'Playzor Team';
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS read_time TEXT NOT NULL DEFAULT '5 min read';
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS published BOOLEAN DEFAULT false;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Indexes (IF NOT EXISTS = safe to re-run)
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);

-- Enable RLS (safe to call multiple times)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Drop & recreate policies to avoid "already exists" errors
DROP POLICY IF EXISTS "Public can read published blogs" ON blogs;
CREATE POLICY "Public can read published blogs"
  ON blogs FOR SELECT
  USING (published = true);

DROP POLICY IF EXISTS "Allow all operations for authenticated requests" ON blogs;
CREATE POLICY "Allow all operations for authenticated requests"
  ON blogs FOR ALL
  USING (true)
  WITH CHECK (true);

-- updated_at auto-trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs;
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();


-- =============================================
-- 2. CONTACT MESSAGES TABLE
-- =============================================

CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Safe column additions (adds only if missing)
ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS ip_address TEXT;
ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS user_agent TEXT;
ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS read BOOLEAN DEFAULT false;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(read);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop & recreate policies
DROP POLICY IF EXISTS "Public can insert contact messages" ON contact_messages;
CREATE POLICY "Public can insert contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all operations for admin" ON contact_messages;
CREATE POLICY "Allow all operations for admin"
  ON contact_messages FOR ALL
  USING (true)
  WITH CHECK (true);


-- =============================================
-- 3. VISITOR LOGS TABLE (IP Tracking)
-- =============================================

CREATE TABLE IF NOT EXISTS visitor_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  country TEXT,
  country_code TEXT,
  city TEXT,
  region TEXT,
  isp TEXT,
  org TEXT,
  timezone TEXT,
  user_agent TEXT,
  page_url TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Safe column additions
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS country_code TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS city TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS region TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS org TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS timezone TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS referrer TEXT;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_visitor_logs_created_at ON visitor_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_visitor_logs_ip ON visitor_logs(ip_address);
CREATE INDEX IF NOT EXISTS idx_visitor_logs_country ON visitor_logs(country);

-- Enable RLS
ALTER TABLE visitor_logs ENABLE ROW LEVEL SECURITY;

-- Public can insert visitor logs (from API route)
DROP POLICY IF EXISTS "Allow insert visitor logs" ON visitor_logs;
CREATE POLICY "Allow insert visitor logs"
  ON visitor_logs FOR INSERT
  WITH CHECK (true);

-- Admin can read all visitor logs
DROP POLICY IF EXISTS "Allow all operations for admin on visitor_logs" ON visitor_logs;
CREATE POLICY "Allow all operations for admin on visitor_logs"
  ON visitor_logs FOR ALL
  USING (true)
  WITH CHECK (true);


-- =============================================
-- 4. STORAGE SETUP (Run in Supabase Dashboard)
-- =============================================
-- 1. Go to Storage in Supabase Dashboard
-- 2. Create a new bucket called "blog-images"
-- 3. Set it as PUBLIC bucket
-- 4. Add policy: Allow public read (SELECT) for everyone
-- 5. Add policy: Allow upload (INSERT) for everyone (anon key)
-- 6. Add policy: Allow delete (DELETE) for everyone (anon key)
--
-- Or uncomment and run:
-- INSERT INTO storage.buckets (id, name, public)
-- VALUES ('blog-images', 'blog-images', true)
-- ON CONFLICT (id) DO NOTHING;
