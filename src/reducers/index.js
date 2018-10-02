const initialState = {
  lists: [
    { id: 1, name: "List 1" },
    { id: 2, name: "List 2" },
    { id: 3, name: "List 3" },
    { id: 4, name: "Empty List" }
  ],

  todos: [
    { id: 1, listId: 1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", complete: true },
    { id: 2, listId: 1, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", complete: false },
    { id: 3, listId: 2, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", complete: false },
    { id: 4, listId: 2, description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", complete: false },
    { id: 5, listId: 2, description: "Short todo", complete: false },
    { id: 6, listId: 3, description: "Short todo two", complete: false }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // TODO go back to commented out version once using an API/DB to autoassign IDs
      // return { ...state, todos: state.todos.concat(action.payload) };

      const lastTodoId = state.todos[state.todos.length - 1].id;
      return {
        ...state,
        todos: state.todos.concat({
          ...action.payload, id: lastTodoId + 1
        })
      };
    case 'TOGGLE_COMPLETE':
      // TODO there must be a more interesting way to do this
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.complete = !todo.complete;
          }
          return todo;
        })
      }
    case 'ADD_LIST':
      // TODO go back to commented out version once using an API/DB to autoassign IDs
      // return { ...state, lists: state.lists.concat(action.payload) };

      const lastListId = state.lists[state.lists.length - 1].id;
      return {
        ...state,
        lists: state.lists.concat({
          ...action.payload, id: lastListId + 1
        })
      };

      // console.log(action.payload);
      // return state;
    case 'REMOVE_LIST':
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default rootReducer;
