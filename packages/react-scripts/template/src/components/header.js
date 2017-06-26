import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="title">
            <h1><a href="#">Frame Trap</a></h1>
          </div>
          <div className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
