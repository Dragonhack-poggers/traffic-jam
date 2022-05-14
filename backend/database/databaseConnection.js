const supabaseImport = require("@supabase/supabase-js")

const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3amx2anZqcXppbGRrdmx0emljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI1MjEzNjIsImV4cCI6MTk2ODA5NzM2Mn0.hyMIJ0kfY3fd6jJ207bDRj7BaMpRo_5eeTTXZBEXRMw"
const supabase = supabaseImport.createClient("https://vwjlvjvjqzildkvltzic.supabase.co", publicAnonKey)

async function insertDatabase (long, lat, numberOfDevices) {
  const { data, error } = await supabase
    .from('traffic-jam')
    .insert([
      { long: 1.0, lat: 0.1, numberOfDevices: 400 }
    ])
}

module.exports = insertDatabase;