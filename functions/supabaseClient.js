// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wfffqbwgdfaamlgkkjea.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZmZxYndnZGZhYW1sZ2tramVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMTUyNzcsImV4cCI6MjA1Mjc5MTI3N30.AAUDZ-CsQbF4xEdBIggpozQCU5MbpJ5qz4KUYZOFLMk'; // Replace with your Supabase Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
