import React, { Component } from 'react';

class Offense extends Component {
  constructor(props) {
    super(props);
  }

  Offense() {
    const { sample } = this.props;
    return (
      <div id="OffenseData">
        <h3 id="Header">Offense</h3>
        <table className="table table-striped table-sm ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col">Passing</th>
              <th scope="col">Rushing</th>
              <th scope="col">Receiving</th>
              <th scope="col">Touchdowns</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((elem, i) => ([
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{elem.Offense.Player}</td>
                <td>{elem.Offense.Passing}</td>
                <td>{elem.Offense.Rushing}</td>
                <td>{elem.Offense.Receiving}</td>
                <td>{elem.Offense.Touchdowns}</td>
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
      this.Offense()
    );
  }
}

export default Offense;
