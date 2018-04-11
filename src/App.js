import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coindesk from './components/coindesk';
import Coinmarketcap from './components/coinmarketcap';
import Currencies from './components/currencies';
import MyFancyComponent from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BTC Prices from two exchanges:</h1>
        </header>
        <div className="App-intro">
          <div className="coindesk">
              <ol>
                  <Currencies />
                  <Coindesk />
                  <Coinmarketcap />
                  <MyFancyComponent
                    />
              </ol>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
