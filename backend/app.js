const express = require('express');
const { insertEvent, getEvents } = require('../backend/database/databaseConnection')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post('/event', async (req, resp) => {
  const { body } = req;
  const dbResponse = await insertEvent(body.long, body.lat, body.numberOfDevices);
  resp.send('Success');
});

app.get('/event', async (req, resp) => {
  const response = await getEvents();
  resp.send(response);
});

const PORT = 3000;

app.listen(PORT);

module.exports = app;