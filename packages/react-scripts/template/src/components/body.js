import React, { Component } from 'react';
import sflogo from '../images/sfv_logo.png';

class Body extends Component {
  render() {
    return (
      <div className="main_body">
        <h1>Choose a Game</h1>
        <div><p>This is where the games will go</p></div>
        <img src={sflogo} alt="Stret Figher 5" className="sf5logo" />

      </div>
    );
  }
}

export default Body;
