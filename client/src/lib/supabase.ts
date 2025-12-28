import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create client with placeholder values if env vars are missing
// This allows the app to run without Supabase configured
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

export type Product = {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  specifications: Record<string, any>;
  images: string[];
  is_featured: boolean;
  created_at: string;
  categories?: Category; // Joined data
};

export type CompanyProfile = {
  id: string;
  key: string;
  value: any;
  created_at: string;
};
