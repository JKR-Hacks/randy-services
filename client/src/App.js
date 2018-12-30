import React, { Component } from 'react';
import Offense from './components/Offense.jsx';
import Navbar from './components/Navbar.jsx';
import Defense from './components/Defense.jsx';
import SpecialTeams from './components/SpecialTeams.jsx';
import MainComponent from './components/MainComponent.jsx';

const sampleData = require('./Sample_Data.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sampleData,
      view: 'home',
    };
  }

  componentDidMount() {
    // SET INITIAL STATE HERE FOR SAMPLE DATA WITH SEEDED DATA
  }


  changeView(e) {
    this.setState({
      view: e,
    });
    this.renderView();
  }


  renderView() {
    const { sample, view } = this.state;
    if (view === 'home') {
      return (
        <div id="homePage">
          <a href="https://www.therams.com/" rel="opener" target="_blank">
            <img src="https://pngimage.net/wp-content/uploads/2018/06/la-rams-logo-png-5.png" width="400" height="190" alt="" />
          </a>
          <br />
          <br />
          <h1>Welcome To The Official L.A. Rams Statistics App!</h1>
          <h4>Brought to you by ESPN</h4>
        </div>
      );
    } if (view === 'offense') {
      return (
        <div>
          <Offense sample={sample.default} />
        </div>
      );
    } if (view === 'defense') {
      return (
        <div>
          <Defense sample={sample.default} />
        </div>
      );
    } if (view === 'specialTeams') {
      return (
        <div>
          <SpecialTeams sample={sample.default} />
        </div>
      );
    } if (view === 'mainComponent') {
      return (
        <div>
          <MainComponent sample={sample.default} />
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        <Navbar change={this.changeView.bind(this)} />
        {this.renderView()}
      </div>
    );
  }
}

export default App;
