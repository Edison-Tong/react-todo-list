import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Build a To-Do App", "Have fun coding!"]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
