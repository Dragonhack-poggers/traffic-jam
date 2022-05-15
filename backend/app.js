const express = require('express');
const { insertEvent, getEvents, upsertUser } = require('../backend/database/databaseConnection')
cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Add event
app.post('/event', async (req, resp) => {
  const { body } = req;
  const dbResponse = await insertEvent(body.long, body.lat, body.numberOfDevices, body.userId);
  resp.send('Success');
});

// Get all events
app.get('/event', async (req, resp) => {
  const response = await getEvents();
  resp.send(response);
});

// Log time from users to DB
app.post('/update-user', async (req, resp) => {
  const { body } = req;
  const dbResponse = await upsertUser(body.userId, body.time);
  resp.send('Success');
});



const PORT = 3000;

app.listen(PORT);

module.exports = app;
