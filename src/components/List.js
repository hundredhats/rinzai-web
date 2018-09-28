import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './css/List.css';
import Todo from './Todo.js';

const mapStateToProps = (state, ownProps) => {
  return { todos: state.todos.filter(todo => todo.listId === ownProps.id) };
};

class ConnectedList extends Component {
  render() {
    return (
      <div className="List">
        <div className="TodosContainer">
          <h2>{ this.props.name }</h2>

          {this.props.todos.map(todo => (
            <Todo key={todo.id} id={todo.id} description={todo.description} />
          ))}
        </div>

        <form className="NewTodoForm">
          <input type="text" />
          <input type="submit" value="Add" />
        </form>
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
