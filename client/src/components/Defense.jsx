import React, { Component } from 'react';

class Defense extends Component {
  constructor(props) {
    super(props);
  }

  defense() {
    const { sample } = this.props;
    return (
      <div id="DefenseData">
        <h3 id="Header">Defense</h3>
        <table className="table table-striped table-sm">
          <thead className="thead-dark">
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
            {sample.map((elem, i) => ([
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

  render() {
    return (
      this.defense()
    );
  }
}

export default Defense;
