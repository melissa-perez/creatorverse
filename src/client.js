import { createClient } from '@supabase/supabase-js';

const URL = 'https://nayeshzgepfdgilbmhbi.supabase.co';
const API_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5heWVzaHpnZXBmZGdpbGJtaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MzYyMzYsImV4cCI6MjA0MDAxMjIzNn0.pt4JukSUXKGX1Yjyj2KZilweUcBmzbc4SgWGAatwn3Y';

export const supabase = createClient(URL, API_KEY);
