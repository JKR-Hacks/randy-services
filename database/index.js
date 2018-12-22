const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tattooAssistant/newClient');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const statsSchema = {
  teamSide: String,
  player: { type: String, unique: true },
  passing: Number,
  rushing: Number,
  receiving: Number,
  touchdowns: Number,
  tackles: Number,
  sacks: Number,
  interceptions: Number,
  fumblesForced: Number,
  fieldGoals: Number,
  extraPoints: Number,
};

// RANDY THOMAS WAS HERE//

const Stats = mongoose.model('Stats', statsSchema);


module.exports = db;
