import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import List from './components/List.js';

library.add(faTimes)

const mapStateToProps = state => {
  return { lists: state.lists };
};

class ConnectedApp extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Rinzai</h1>
        </header>

          <div className="ListContainer">
            {this.props.lists.map(list => (
              <List key={list.id} id={list.id} name={list.name} />
            ))}
          </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
