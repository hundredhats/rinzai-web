import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Todo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

export default Todo;
