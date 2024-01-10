import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../todoList/TodoList";
const TodoSubmit = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      setTodos([...todos, { id: uuidv4(), name: input, completed: false }]);

      setInput("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} type="text" />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoSubmit;
