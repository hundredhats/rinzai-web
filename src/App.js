import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Rinzai</h1>

          <List />
        </header>
      </div>
    );
  }
}

export default App;
