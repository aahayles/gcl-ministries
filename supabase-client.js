import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.56.1/+esm';

const SUPABASE_URL = 'https://hwjwwhdeaujgdyrgmxrb.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_urrwnrwb7aBZya_4XISzHQ_qR8aVLN-';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const GALLERY_BUCKET = 'gallery';
