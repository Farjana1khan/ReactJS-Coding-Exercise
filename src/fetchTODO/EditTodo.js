import React, { useRef, useState, useEffect } from "react";

function Todo() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const TodoInput = useRef();

  const FetchData = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("TodoData", data.todos);
        setData(data.todos || []);
      })
      .catch((err) => {
        console.log("errerrerr", err);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const AddTodo = () => {
    const newTodo = {
      id: data.length + 1, // Generate a new ID for the new todo
      completed: false,
      todo: TodoInput.current.value,
    };
    setData([newTodo, ...data]);
    TodoInput.current.value = "";
  };

  const handleEditClick = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = (id) => {
    const updatedData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: editText };
      }
      return todo;
    });
    setData(updatedData);
    setEditId(null);
  };

  return (
    <>
      <h1>TODO APP</h1>

      <input type="text" ref={TodoInput} />
      <button onClick={AddTodo}>Add Todo</button>

      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleEditSave(todo.id)}>Save</button>
              </>
            ) : (
              <span onClick={() => handleEditClick(todo.id, todo.todo)}>
                {todo.todo} - {todo.completed ? "Completed" : "Not Completed"}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
