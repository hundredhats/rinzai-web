import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import List from './components/List.js';

library.add(faTimes, faRandom)

const mapStateToProps = state => {
  return { lists: state.lists };
};

const mapDispatchToProps = dispatch => {
  return {
    addList: list => dispatch({
      type: 'ADD_LIST',
      payload: {
        // id: 100,
        name: list.name
      }
    })
  }
}

class ConnectedApp extends Component {
  constructor(props) {
    super(props);
    this.state = { newList: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ newList: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addList({ name: this.state.newList });
    this.setState({ newList: '' });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rinzai</h1>
        </header>

        <div className="NewListContainer">
          <form className="NewListForm" onSubmit={this.handleSubmit}>
            <input type="text"
              placeholder="Add new list..."
              value={this.state.newList}
              onChange={this.handleChange} />
            <input type="submit" value="Add"/>
          </form>
        </div>

        <div className="ListContainer">
          {this.props.lists.map(list => (
            <List key={list.id} id={list.id} name={list.name} />
          ))}
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
