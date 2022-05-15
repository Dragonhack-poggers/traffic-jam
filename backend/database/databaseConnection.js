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

async function upsertUser(id = '75442486-0878-440c-9db1-a7006c25a39f', time = 4500) {

  let sumTime = time;

  const { data } = await supabase.from('user').select(`time`).eq('id', id);

  sumTime += (!!data[0].time) ? data[0].time : 0;

  await supabase
    .from('user')
    .upsert({ id: id, time: sumTime });

}

module.exports = { insertEvent, getEvents, upsertUser };
