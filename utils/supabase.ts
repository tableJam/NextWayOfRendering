import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ykxizhvyzzwqcgzotwwn.supabase.co'
const supabaseKey = process.env.API_KEY ? process.env.API_KEY : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlreGl6aHZ5enp3cWNnem90d3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4Mjc4MDksImV4cCI6MjAwMzQwMzgwOX0.uP9DS3pjVDhJEq6qqanZPOUpGHL7QS_nUEo8u865hrI';
export const supabase = createClient(supabaseUrl, supabaseKey);