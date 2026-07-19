const supabaseUrl = "https://kxhnndscpqmiembmfjzx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aG5uZHNjcHFtaWVtYm1manp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NjQ3NDgsImV4cCI6MjEwMDA0MDc0OH0.OSFE4ocBaaBMGT_uxu1M2u331iIitnCRuoae9hU80JI";

const { createClient } = supabase;
const db = createClient(supabaseUrl, supabaseKey);