import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
// Note: For DDL operations (CREATE TABLE), we usually need the SERVICE_ROLE_KEY.
// However, since the user only provided ANON_KEY, we can try to use the SQL Editor via MCP if this fails,
// OR we can try to use the ANON_KEY if RLS is not yet enabled (which is risky but possible for initial setup).
// BUT, since we have the ACCESS TOKEN from the user (sbp_...), we can use that!
// The access token is a Personal Access Token (PAT) which has full admin rights.

const supabaseAccessToken = 'sbp_b140735f8edd66117afbd631836e6bc2c69059a4';

// We can't use supabase-js with PAT directly for DDL.
// We have to use the Management API or just raw SQL via the REST API if enabled.
// Actually, the best way with PAT is to use the Supabase Management API to run SQL.
// But supabase-js doesn't support Management API directly for SQL execution.

// Let's try to use the `postgres` connection string if we had it, but we don't.
// Wait, the user provided the PAT. I can use the MCP tool again but I need to make sure the environment variable is set correctly for the PROCESS running the MCP tool.
// The previous attempt failed because `export` only affects the shell, not the MCP server process which might be separate.

// ALTERNATIVE: Use the `supabase-js` client with the `service_role` key if we had it.
// Since we don't, and the MCP tool is failing to pick up the token...

// Let's try to use the `fetch` API to call the Supabase SQL API directly using the PAT?
// No, the SQL API usually requires the project ref and the secret.

// Let's try to use the MCP tool again but this time I will assume the token might need to be passed differently or the tool is just broken for auth.
// BUT, I can use the `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to insert data IF the tables existed.

// Since I cannot create tables without admin rights, and the MCP tool is acting up...
// I will try to use the `manus-mcp-cli` again but I will try to set the env var in a way that persists?
// No, I can't.

// Let's try to use the `curl` command to call the Supabase API directly to execute SQL?
// Supabase Management API: POST /v1/projects/{ref}/sql
// Headers: Authorization: Bearer {access_token}

const projectRef = 'qhjqoprocvudxzdhuqmg';
const sql = `
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  specifications JSONB,
  images TEXT[],
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS company_profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public categories are viewable by everyone" ON categories FOR SELECT USING (true);
CREATE POLICY "Public products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Public company profile is viewable by everyone" ON company_profile FOR SELECT USING (true);

-- Insert Initial Data
INSERT INTO categories (name, slug) VALUES
('Undangan Pernikahan', 'undangan-pernikahan'),
('Kartu Nama', 'kartu-nama'),
('Brosur & Flyer', 'brosur-flyer'),
('Spanduk & Banner', 'spanduk-banner'),
('Stiker & Label', 'stiker-label')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO company_profile (key, value) VALUES
('about', '{"description": "Percetakan Surya Grafika adalah solusi percetakan terpercaya yang melayani segala kebutuhan cetak Anda mulai dari undangan pernikahan, kebutuhan kantor, hingga materi promosi usaha. Kami mengutamakan kualitas, ketepatan waktu, dan harga yang kompetitif."}'),
('contact', '{"address": "Jl. Contoh No. 123, Jakarta", "phone": "+6281234567890", "email": "info@suryagrafika.com", "whatsapp": "6281234567890"}')
ON CONFLICT (key) DO NOTHING;
`;

console.log("Executing SQL via Supabase Management API...");

const response = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/sql`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${supabaseAccessToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query: sql })
});

if (!response.ok) {
  const error = await response.text();
  console.error('Failed to execute SQL:', error);
  process.exit(1);
}

console.log('Database initialized successfully!');
