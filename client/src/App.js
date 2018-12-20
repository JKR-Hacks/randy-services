import React from 'react';

const sampleData = require('./Sample_Data.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sampleData,
    };
  }

  wtf() {
    console.log('hello');
  }


  render() {
    return (
      this.wtf()
    );
  }
}

export default App;
