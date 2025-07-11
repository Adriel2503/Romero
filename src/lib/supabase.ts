import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xytecovippwwpoxwojce.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dGVjb3ZpcHB3d3BveHdvamNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMDg2OTksImV4cCI6MjA2Nzc4NDY5OX0.KJ1LqT7oufzXqjHz9RdAnYu-vW2u8x_Tl-_iMju9I30';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 