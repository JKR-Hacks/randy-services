import React, { Component } from 'react';

class Defense extends Component {
  constructor(props) {
    super(props);
  }

  defense() {
    return (
      <div id="DefenseData">
        <h3>Defense</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col">Tackles</th>
              <th scope="col">Sacks</th>
              <th scope="col">Interceptions</th>
              <th scope="col">Fumbles Forced</th>
            </tr>
          </thead>
          <tbody>
            {this.props.sample.map((elem, i) => ([
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{elem.Defense.Player}</td>
                <td>{elem.Defense.Tackles}</td>
                <td>{elem.Defense.Sacks}</td>
                <td>{elem.Defense.Interceptions}</td>
                <td>{elem.Defense.FumblesForced}</td>
              </tr>,
            ]))}
          </tbody>
        </table>
      </div>
    );
  }

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
      this.defense()
    );
  }
}

export default Defense;
