import { ADD_TODO, DELETE_TODO, COMPLET_TODO } from "../type";

const initialState = { todos: [] };
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case COMPLET_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    default:
      return state;
  }
};
export default todoReducer;
