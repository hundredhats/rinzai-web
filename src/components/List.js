import React, { Component } from 'react';
import './css/List.css';
import Todo from './Todo.js';

class List extends Component {
  render() {
    return (
      <div className="List">
        <h2>List of Testing</h2>
        <Todo />
        <Todo />
        <Todo />
      </div>
    )
  }
}

export default List;
