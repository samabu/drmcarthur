import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul className="navUL">
            <li className="navLI"><a className="navLinks" href="#">BOOK AN APPOINTMENT</a></li>
            <li className="navLI"><a className="navLinks" href="#">MAKE A PAYMENT</a></li>
            <li className="navLI"><a className="navLinks" href="#">ABOUT US</a></li>
            <li className="navLI"><a className="navLinks" href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="Welcome">
          <div className="welcome_banner">
            <div className="welcome_logo"></div>
          </div>
        </div>
        <div className="Wood">

        </div>
      </div>
    );
  }
}

export default App;
