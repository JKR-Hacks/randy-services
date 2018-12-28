import React, { Component } from 'react';

class SpecialTeams extends Component {
  constructor(props) {
    super(props);
  }

  specialTeams() {
    const { sample } = this.props;
    return (
      <div id="SpecialTeamsData">
        <h3 id="Header">Special Teams</h3>
        <table className="table table-striped table-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col">Field Goal</th>
              <th scope="col">Extra Points</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((elem, i) => ([
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{elem.SpecialTeams.Player}</td>
                <td>{elem.SpecialTeams.FieldGoal}</td>
                <td>{elem.SpecialTeams.ExtraPoint}</td>
              </tr>,
            ]))}
          </tbody>
        </table>
      </div>
    );
  }


  render() {
    return (
      this.specialTeams()
    );
  }
}

export default SpecialTeams;
