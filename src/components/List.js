import React, { Component } from 'react';
import './css/List.css';
import Todo from './Todo.js';

class List extends Component {
  render() {
    return (
      <div className="List">
        <h2>{ this.props.name }</h2>
        <Todo description="Todo 1" />
        <Todo description="Todo 2" />
        <Todo description="Todo 3" />
      </div>
    )
  }
}

export default List;
