import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/List.css';
import Todo from './Todo.js';

const mapStateToProps = (state, ownProps) => {
  return { todos: state.todos.filter(todo => todo.listId === ownProps.id)
    .sort((a, b) => a.complete ? 1 : -1 ) };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch({
      type: 'ADD_TODO',
      payload: {
        // id: todo.id,
        listId: todo.listId,
        description: todo.description
      }
    }),

    renameList: list => dispatch({
      type: 'RENAME_LIST',
      payload: {
        id: list.id,
        name: list.name
      }
    }),

    removeList: list => dispatch({
      type: 'REMOVE_LIST',
      payload: {
        id: list.id
      }
    }),

    showModal: description => dispatch({
      type: 'SHOW_MODAL',
      payload: { description: description }
    })
  }
};

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = { newTodo: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renameList = this.renameList.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo({
      description: this.state.newTodo,
      listId: this.props.id
      // id: 100
    });
    this.setState({ newTodo: '' });
  }

  handleClose(event) {
    this.props.removeList({ id: this.props.id });
  }

  renameList(event) {
    this.props.renameList({ id: this.props.id, name: event.target.value });
  }

  removeFocus(event) {
    event.preventDefault();
    document.activeElement.blur();
  }

  getRandom() {
    let todos = this.props.todos.filter(todo => !todo.complete);
    this.props.showModal(
      todos[Math.floor(Math.random() * todos.length)].description
    );
  }

  render() {
    let randomButton;
    if (this.props.todos.length > 1) {
      randomButton = (<button className="random" onClick={this.getRandom}><FontAwesomeIcon icon="random"/></button>)
    }

    return (
      <div className="List">
        <FontAwesomeIcon icon="times" className="close" onClick={this.handleClose} />
        <div className="TodosContainer">
          <form onSubmit={this.removeFocus}>
            <input className="List-name" type="text" value={this.props.name} onChange={this.renameList} />
          </form>

          {this.props.todos.map(todo => (
            <Todo key={todo.id} id={todo.id} description={todo.description} complete={todo.complete} />
          ))}
        </div>

        {randomButton}

        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <input type="text" name="newTodo" value={this.state.newTodo} onChange={this.handleChange} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

List.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

export default List;
