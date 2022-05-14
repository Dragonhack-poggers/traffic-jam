const supabaseImport = require("@supabase/supabase-js")

const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3amx2anZqcXppbGRrdmx0emljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI1MjEzNjIsImV4cCI6MTk2ODA5NzM2Mn0.hyMIJ0kfY3fd6jJ207bDRj7BaMpRo_5eeTTXZBEXRMw"
const supabase = supabaseImport.createClient("https://xyzcompany.supabase.co", publicAnonKey)

console.log(supabase)

module.exports = supabase;


