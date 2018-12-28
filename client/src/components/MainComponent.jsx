import React, { Component } from 'react';

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  mainComp() {
    return (
      <div>
        <h1>Welcome To My Main Component!</h1>
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
