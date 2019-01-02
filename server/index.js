const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/stats', (req, res) => {
  db.Stats.find({}).exec((err, data) => {
    console.log(data, 'dataaa');
    res.send('eeojio');
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
