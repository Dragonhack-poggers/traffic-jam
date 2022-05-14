const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post('/event', (req, resp) => {
    resp.send({ hello: 'qrold'});
});

const PORT = 3000;

app.listen(PORT);

module.exports = app;