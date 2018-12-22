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
      view: "home"
    };
  }


  changeView(e) {
    this.setState({
      view: e
    });
      this.renderView()
  }


  renderView() {
    if (this.state.view === "home") {
      return (
        <div id="homePage">
          <img src="https://pngimage.net/wp-content/uploads/2018/06/la-rams-logo-png-5.png" width="400" height="190" />
          <br></br>
          <br></br>
          <h1>Welcome To The Official L.A. Rams Statistics App!</h1>
          <h4>Brought to you by ESPN</h4>
        </div>
      );
    } else if (this.state.view === "offense") {
      return (
        <div>
          <Offense sample={this.state.sample.default} />
        </div>
      );
    } else if (this.state.view === "defense") {
      return (
        <div>
          <Defense sample={this.state.sample.default} />
        </div>
      );
    } else if (this.state.view === "specialTeams") {
      return (
        <div>
          <SpecialTeams sample={this.state.sample.default}/>
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        <Navbar change={this.changeView.bind(this)}/>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
