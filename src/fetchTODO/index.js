import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Todo() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const FetchData = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => {
        return res.json();
      })
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

  const TodoInput = useRef();
  const AddTodo = () => {
    const isCompleted = {
      completed: false,
      todo: TodoInput.current.value
    };
    setData([isCompleted, ...data]);
  };

  const handleEdit =(e)=> {
setId(e.target.id)
  }

  const handleEditSave = (id) => {
    const updatedData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: id };
      }
      return todo;
    });
    setData(updatedData);
    setId(null);
  };

  return (
    <>
      <h1>TODO APP</h1>

      <input type="text" ref={TodoInput} />
      <button onClick={AddTodo}>Add Todo</button>

      <ul>
        {data.map((todo) => {

            return(
                id === todo.id?(
                  <>
                  <input type="text" value={todo.todo}  />
                  <button onClick={() => handleEditSave(todo.id)}>Save</button>
                  </>
                ):(
                    <li key={todo?.id} onClick={handleEdit}>
          
          {todo?.todo} - {todo.completed ? "Completed" : "Not Completed"}
        
          </li>
                )
            )
         
        })}
      </ul>
    </>
  );
}

export default Todo;
