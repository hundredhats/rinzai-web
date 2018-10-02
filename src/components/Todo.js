import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './css/Todo.css';

const mapDispatchToProps = dispatch => {
  return {
    toggleComplete: todo => dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id: todo.id }
    })
  }
};

class ConnectedTodo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.toggleComplete({ id: this.props.id });
  }

  render() {
    let textClass = this.props.complete ? "complete" : "incomplete";

    return (
      <div className="Todo" onClick={ this.handleClick }>
        <p className={ textClass }>{ this.props.description }</p>
      </div>
    )
  }
}

const Todo = connect(null, mapDispatchToProps)(ConnectedTodo);

Todo.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  complete: PropTypes.bool
};

export default Todo;
