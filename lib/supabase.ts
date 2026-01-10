import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client (only use in API routes)
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
