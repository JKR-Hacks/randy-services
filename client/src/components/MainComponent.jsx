import React, { Component } from 'react';

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }


  mainComp() {
    const { sample, photos } = this.props;
    return (
      <div>
        {photos.map((elem, i) => <img key={i} src={elem.picture.large} />)}
        <h3>Defense</h3>
        <li>
          Interceptions Median:
          {' '}
          {sample.reduce((elem, i) => elem + i.Defense.Interceptions, 0) / sample.length }
        </li>
        <li>
          Tackles Median:
          {' '}
          {sample.reduce((elem, i) => elem + i.Defense.Tackles, 0) / sample.length}
        </li>
        <br />
        <h3>Offense:</h3>
        <li>
          Passing Yards:
          {' '}
          {sample.reduce((elem, i) => elem + i.Offense.Passing, 0) / sample.length}
        </li>
        <li>
          Rushing Yards:
          {' '}
          {sample.reduce((elem, i) => elem + i.Offense.Rushing, 0) / sample.length}
        </li>
      </div>
    );
  }


  render() {
    return (
      this.mainComp()
    );
  }
}

export default MainComponent;
