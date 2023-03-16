export const INITIAL_STATE = {
  todos: [],
  value: '',
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
        value: '',
      };
    case 'INPUT_TODO':
      return { ...state, value: action.payload };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((items) => items !== action.payload),
      };
    default:
      return state;
  }
};
