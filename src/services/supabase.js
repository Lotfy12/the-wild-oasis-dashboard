import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vzgphlkojwnuthzzrwfw.supabase.co";
const supabaseKey = "sb_publishable_zvLMwxUka0vCpWUnGTyRPg_D8H8Gqx_";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
