const initialState = {
  lists: [
    { id: 1, name: "List 1" },
    { id: 2, name: "List 2" },
  ],

  todos: [
    { id: 1, listId: 1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, listId: 1, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, listId: 2, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: 4, listId: 2, description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
  ]
};

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
