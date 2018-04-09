import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coindesk from './components/coindesk';
import Coinmarketcap from './components/coinmarketcap';
import Currencies from './components/currencies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div className="coindesk">
              <h2>BTC Prices from two exchanges:</h2>
              <ol>
                  <Currencies />
                  <Coindesk />
                  <Coinmarketcap />
              </ol>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
