import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Todo.css';

class Todo extends Component {
  render() {
    let textClass = this.props.complete ? "complete" : "incomplete";

    return (
      <div className="Todo">
        <p className={ textClass }>{ this.props.description }</p>
      </div>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  complete: PropTypes.bool
};

export default Todo;
