import { ADD_TODO, DELETE_TODO, COMPLET_TODO } from "../type";
export const addtodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};
export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  };
};
export const completetodo = payload => {
  return {
    type: COMPLET_TODO,
    payload
  };
};
