import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getCurrentDate = () => {
    let date = new Date();
    return date.toDateString();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Today's date is: {this.getCurrentDate()}
        </p>
      </div>
    );
  }
}

export default App;
