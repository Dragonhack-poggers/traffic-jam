const supabaseImport = require("@supabase/supabase-js")

const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3amx2anZqcXppbGRrdmx0emljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI1MjEzNjIsImV4cCI6MTk2ODA5NzM2Mn0.hyMIJ0kfY3fd6jJ207bDRj7BaMpRo_5eeTTXZBEXRMw"
const supabase = supabaseImport.createClient("https://vwjlvjvjqzildkvltzic.supabase.co", publicAnonKey)

async function insertEvent(long = 1.8, lat = 1.9, numberOfDevices = 100) {
  const response = await supabase
    .from('traffic-jam')
    .insert([
      { long: long, lat: lat, numberOfDevices: numberOfDevices }
    ]);
}

async function getEvents() {
  const { data, error } = await supabase
    .from('traffic-jam')
    .select()
  return data;
}

module.exports = { insertEvent, getEvents };
