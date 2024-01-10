import React from "react";

function TodoList({
  todos,
  setTodos,
  seteditId,
  seteditText,
  editId,
  editText,
}) {
  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  const handleEdit = (id, name) => {
    seteditId(id);
    seteditText(name);
  };

  const saveEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: editText } : todo
    );
    setTodos(updatedTodos);
    seteditId(null); // Reset editId after saving
    seteditText(""); // Reset editText after saving
  };

  return (
    <div className="todoLists">
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(event) => seteditText(event.target.value)}
              />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{todo.name}</span>
              <button onClick={() => handleEdit(todo.id, todo.name)}>
                Edit
              </button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </div>
  );
}

export default TodoList;
