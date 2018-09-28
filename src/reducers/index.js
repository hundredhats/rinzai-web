const initialState = {
  lists: [
    { id: 1, name: "List 1" },
    { id: 2, name: "List 2" },
    { id: 3, name: "List 3" },
    { id: 4, name: "Empty List" }
  ],

  todos: [
    { id: 1, listId: 1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, listId: 1, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, listId: 2, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: 4, listId: 2, description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 5, listId: 2, description: "Short todo" },
    { id: 6, listId: 3, description: "Short todo two" }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // TODO go back to commented out version once using an API/DB to autoassign IDs
      // return { ...state, todos: state.todos.concat(action.payload) };

      const lastId = state.todos[state.todos.length - 1].id;
      return {
        ...state,
        todos: state.todos.concat({
          ...action.payload, id: lastId + 1
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
