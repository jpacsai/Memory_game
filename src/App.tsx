import React, { Component } from 'react';

import Dashboard from './components/Dashboard';
import Deck from './components/Deck';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Dashboard />
        <Deck />
      </div>
    );
  }
}

export default App;
