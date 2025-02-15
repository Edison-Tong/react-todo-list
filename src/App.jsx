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

  return (
    <div>
      <h1>My To-Do List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
