import React, { Component } from 'react';

const sampleData = require('./Sample_Data.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sampleData,
    };
  }

  seedData() {
    return (
    <div>
      <h1>Offense:</h1>
      {this.state.sample.default.map((elem, i) => {
        return (
        <p key={i}><b>Player:</b> {elem.Offense.Player} <br></br>
        <b>Passing:</b> {elem.Offense.Passing} <br></br>
        <b>Rushing:</b> {elem.Offense.Rushing} <br></br>
        <b>Receiving:</b> {elem.Offense.Receiving} <br></br>
        <b>Touchdowns:</b> {elem.Offense.Touchdowns} <br></br>
        </p>
        );
      })}
      <h1>Defense: </h1>
      {this.state.sample.default.map((elem, i) => {
        return (
        <p key={i}><b>Player:</b> {elem.Defense.Player} <br></br>
        <b>Tackles:</b> {elem.Defense.Tackles} <br></br>
        <b>Sacks:</b> {elem.Defense.Sacks} <br></br>
        <b>Interceptions:</b> {elem.Defense.Interceptions} <br></br>
        <b>Fumbles Forced:</b> {elem.Defense.FumblesForced} <br></br>
        </p>
        );
      })}
      <h1>Special Teams: </h1>
      {this.state.sample.default.map((elem, i) => {
        return (
        <p key={i}><b>Player:</b> {elem.SpecialTeams.Player} <br></br>
        <b>Field Goals:</b> {elem.SpecialTeams.FieldGoal} <br></br>
        <b>Extra Points:</b> {elem.SpecialTeams.ExtraPoint} <br></br>
        </p>
        );
      })}
    </div>
    );
  };

//   id: 1,
//   Offense: {
//     Player: 'Kath Pauwel', Passing: '95884', Rushing: '1', Receiving: '78309', Touchdowns: '05417',
//   },
//   Defense: {
//     Player: 'Dermot Pendlington', Tackles: '133', Sacks: '231', Interceptions: '44', FumblesForced: '67964',
//   },
//   SpecialTeams: { Player: 'Rossie Medgewick', FieldGoal: '11013', ExtraPoint: '8040' },
// },


  render() {
    return (
      this.seedData()
    );
  }
}

export default App;
