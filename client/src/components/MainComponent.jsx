import React, { Component } from 'react';

const MainComponent = ({ sample }) => (

  <div id="container" className="container">
    <div className="row">

      <div id="lefttop" className="col-md-2">
        <p id="headingComp">Passing:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Offense.Passing, 0) / sample.length}
      </div>

      <div id="righttop" className="col-md-2">
        <p id="headingComp">Rushing:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Offense.Rushing, 0) / sample.length}
      </div>

    </div>

    <div className="row">

      <div id="leftbottom" className="col-md-2">
        <p id="headingComp">Tackles:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Defense.Tackles, 0) / sample.length}
      </div>

      <div id="rightbottom" className="col-md-2">
        <p id="headingComp">Interceptions:</p>
        <br />
        {sample.reduce((elem, i) => elem + i.Defense.Interceptions, 0) / sample.length }
      </div>

    </div>

  </div>

);


export default MainComponent;
