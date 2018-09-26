const initialState = {
  lists: [
    { id: 1, name: "List 1" },
    { id: 2, name: "List 2" },
  ],

  todos: [
    { id: 1, listId: 1, description: "Foo" },
    { id: 2, listId: 1, description: "Bar" },
    { id: 3, listId: 2, description: "Baz" },
    { id: 4, listId: 2, description: "Bat" }
  ]
};

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
