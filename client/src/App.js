import React, { Component } from 'react';
import Offense from './components/Offense.jsx';
import Navbar from './components/Navbar.jsx';
import Defense from './components/Defense.jsx';
import SpecialTeams from './components/SpecialTeams.jsx';

const sampleData = require('./Sample_Data.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sampleData,
    };
  }


  render() {
    return (
      <div>
        <Navbar />
        {/* <Offense sample={this.state.sample.default}/> */}
        {/* <Defense sample={this.state.sample.default}/> */}
        <SpecialTeams sample={this.state.sample.default}/>
      </div>
    );
  }
}

export default App;
