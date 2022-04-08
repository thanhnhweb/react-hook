import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };
  const handleRemove = (index) => {
    dispatch(actions.removeTodo(index));
  };
  const handleEdit = (todo, index) => {
    dispatch(actions.editTodo(todoInput, index));
  };
  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onInput={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}

          <button onClick={() => handleRemove(index)}>x</button>
          <button onClick={() => handleEdit(todo, index)}>sửa</button>
        </li>
      ))}
    </div>
  );
}

export default App;
