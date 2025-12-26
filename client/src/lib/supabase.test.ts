import { createClient } from '@supabase/supabase-js';
import { describe, it, expect } from 'vitest';

describe('Supabase Connection', () => {
  it('should connect to Supabase', async () => {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Try to fetch a non-existent table just to check connection/auth
    // It should return a 404 or empty list, but not a connection error
    const { error } = await supabase.from('non_existent_table').select('*').limit(1);

    // We expect a specific error code for missing table, which means connection worked
    // Or no error if RLS allows reading empty result
    // What we DON'T want is a connection refused or invalid URL error
    
    if (error) {
       // PGRST200 means table not found, which confirms we reached the server
       // 42P01 is Postgres code for undefined table
       expect(['PGRST200', '42P01']).toContain(error.code);
    } else {
       // If no error, connection is definitely fine
       expect(true).toBe(true);
    }
  });
});
