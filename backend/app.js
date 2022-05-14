const express = require('express');
const insertDatabase = require('../backend/database/databaseConnection')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post('/event',  async (req, resp) => {
  const { body } = req;
  const dbResponse = await insertDatabase(body.long, body.lat, body.numberOfDevices);
  resp.send('Success');
});

const PORT = 3000;

app.listen(PORT);

module.exports = app;