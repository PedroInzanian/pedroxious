-- Enable RLS (Row Level Security)
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_desc TEXT NOT NULL,
  full_desc TEXT,
  thumbnail_url TEXT NOT NULL,
  video_url TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create reactions table
CREATE TABLE IF NOT EXISTS reactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  comment_id UUID NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL DEFAULT 'like',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(comment_id, user_id, type)
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE reactions ENABLE ROW LEVEL SECURITY;

-- Projects: Anyone can read
CREATE POLICY "Anyone can read projects" ON projects
  FOR SELECT USING (true);

-- Comments: Anyone can read, authenticated users can insert
CREATE POLICY "Anyone can read comments" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert comments" ON comments
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update their own comments" ON comments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments" ON comments
  FOR DELETE USING (auth.uid() = user_id);

-- Reactions: Anyone can read, authenticated users can insert/delete their own
CREATE POLICY "Anyone can read reactions" ON reactions
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert reactions" ON reactions
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can delete their own reactions" ON reactions
  FOR DELETE USING (auth.uid() = user_id);

-- Seed data for projects
INSERT INTO projects (slug, title, short_desc, full_desc, thumbnail_url, video_url, category) VALUES
(
  'cinematic-trailer',
  'Cinematic Game Trailer',
  'An epic cinematic trailer for an AAA action RPG, featuring dynamic camera work and stunning visual effects.',
  'This project showcases our ability to create immersive, high-quality cinematics for the gaming industry. Working closely with the game development team, we crafted a narrative-driven trailer that captures the essence of the game world and characters. The project involved extensive motion capture, detailed environment design, and cutting-edge visual effects.',
  'https://img.youtube.com/vi/wkvlNP8ynJc/maxresdefault.jpg',
  'wkvlNP8ynJc',
  'Game Cinematics'
),
(
  'character-showcase',
  'Character Animation Reel',
  'Showcase of various character animations including combat, dialogue, and locomotion.',
  'A comprehensive reel demonstrating our character animation expertise across various styles and genres. From realistic human movement to stylized cartoon action, this reel showcases the range of our animation capabilities.',
  'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  'dQw4w9WgXcQ',
  'Character Animation'
),
(
  'environment-flythrough',
  'Fantasy Environment',
  'A breathtaking flythrough of a fantasy world environment.',
  'This environment project showcases our ability to create immersive, detailed worlds. Every element was carefully crafted to create a cohesive visual narrative.',
  'https://img.youtube.com/vi/wkvlNP8ynJc/maxresdefault.jpg',
  'wkvlNP8ynJc',
  'Environments'
),
(
  'vfx-breakdown',
  'VFX Breakdown',
  'Behind the scenes look at our visual effects pipeline.',
  'An in-depth look at our visual effects creation process, from concept to final render.',
  'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  'dQw4w9WgXcQ',
  'VFX'
);
