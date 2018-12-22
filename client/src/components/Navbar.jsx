import React, { Component } from 'react';


class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img height="30" src="https://refb.org/wp-content/uploads/2018/09/ESPN-Logo.png" width="70" /></a>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={() => this.props.change("home")}>Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.change("offense")}>Offense Stats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.change("defense")}>Defense Stats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => this.props.change("specialTeams")}>Special Teams Stats</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return (
      this.navbar()
    );
  }
}

export default Navbar;
