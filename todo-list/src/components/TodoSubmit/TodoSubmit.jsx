import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../todoList/TodoList";
const TodoSubmit = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editText, seteditText] = useState("");
  const [editId, seteditId] = useState(null);
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      const returnTodo = setTodos([
        ...todos,
        { id: uuidv4(), name: input, completed: false },
      ]);
      console.log(todos);
      setInput("");

      return returnTodo;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} type="text" />
        <button type="submit">Add</button>
      </form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        seteditId={seteditId}
        seteditText={seteditText}
        editId={editId}
        editText={editText}
      />
    </div>
  );
};

export default TodoSubmit;
