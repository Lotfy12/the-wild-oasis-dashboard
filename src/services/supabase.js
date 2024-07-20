import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://olyffotvdeyjgwsxiqic.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9seWZmb3R2ZGV5amd3c3hpcWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3OTg3NTcsImV4cCI6MjAyMzM3NDc1N30.Q57DCuFmtsPIOYDcHsw1gnb0hiu_yhQx1bXh47NvYNE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
