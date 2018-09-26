import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './css/List.css';
import Todo from './Todo.js';

const mapStateToProps = state => {
  return { todos: state.todos };
};

class ConnectedList extends Component {
  render() {
    return (
      <div className="List">
        <h2>{ this.props.name }</h2>

        {this.props.todos.map(todo => (
          <Todo key={todo.id} description={todo.description} />
        ))}
      </div>
    )
  }
}

ConnectedList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
