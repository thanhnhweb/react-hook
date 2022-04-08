import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./constain";
const initState = {
  todos: [],
  todoInput: "",
};
function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      const newState = [...state.todos];
      newState.splice(action.payload, 1);
      return {
        ...state,
        todos: newState,
      };
    case EDIT_TODO:
      const a = [...state.todos];
      a.splice(action.index, 1, action.payload);
      return {
        ...state,
        todos: a,
      };
    default:
      throw new Error("invalid");
  }
}
export { initState };
export default reducer;
