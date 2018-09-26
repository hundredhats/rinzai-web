import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import List from './components/List.js';

const mapStateToProps = state => {
  return { lists: state.lists };
};

class ConnectedApp extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Rinzai</h1>

          {this.props.lists.map(list => (
            <List key={list.id} name={list.name} />
          ))}
        </header>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
