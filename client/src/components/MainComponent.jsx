import React, { Component } from 'react';

const MainComponent = ({ sample }) => (

  <div id="container" className="container">
    <p id="statsTitle">Team Stats</p>
    <div className="row">

      <div id="comp" className="col-6 col-sm-4">
        <p id="headingComp">Passing:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Offense.Passing, 0) / sample.length}
      </div>

      <div id="comp" className="col-6 col-sm-4">
        <p id="headingComp">Rushing:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Offense.Rushing, 0) / sample.length}
      </div>

      <div className="w-100 d-none d-md-block" />

      <div id="comp" className="col-6 col-sm-4">
        <p id="headingComp">Tackles:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Defense.Tackles, 0) / sample.length}
      </div>

      <div id="comp" className="col-6 col-sm-4">
        <p id="headingComp">Interceptions:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Defense.Interceptions, 0) / sample.length }
      </div>

      <div className="w-100 d-none d-md-block" />

    </div>

    <a id="statsFooter" href="http://www.espn.com/nfl/statistics" target="_blank">All Team Stats</a>

  </div>
);


export default MainComponent;
