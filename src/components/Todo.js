import React, { Component } from 'react';
import './css/Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Todo;
