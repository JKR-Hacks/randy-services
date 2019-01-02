const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  // db.Stats.find().exec((data) => {
  //   res.send(data);
  // });
  res.send('WORKING');
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
