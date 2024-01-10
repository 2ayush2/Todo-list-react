import React from "react";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todoLists">
      {todos.map((todo) => (
        <li key={todo.id}>
          {" "}
          {/* Added key attribute for React lists */}
          <input
            type="text"
            value={todo.name}
            onChange={(event) => {
              // Handle input change and update the todo name
              const updatedTodos = todos.map((t) =>
                t.id === todo.id ? { ...t, name: event.target.value } : t
              );
              setTodos(updatedTodos);
            }}
          />
        </li>
      ))}
    </div>
  );
}

export default TodoList;
