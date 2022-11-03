import React, { useState } from "react";
import './App.css';

function App() {
  // Below array destructure syntax is equivalent to
  

  const {newTodo, setNewTodo} = useState("");
  const {todos, setTodos} = useState([]);

  const handleNewTodoSubmit = (event) =>{
    event.preventDefault();

    if (newTolength == 0) {

        return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos({... todos, newTodoItem})
    setNewTodo("");
};

  const handleNewTodoDelete = (deLIdx) => {
    // gives current index and item
    const filteredTodos = todos.filter((todo, i) => {
      return i != deLIdx;
    });
    
    setTodos(filteredTodos);
  }

  const handleNewToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(idx == i) {
    return todo.complete = !todo.complete;
      }

    // To avoid mutating the todo directly
        // const updatedTodo = { ... todo, complete: !todo.compete};
        // return updatedTodo,
      
	
    

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form 
        onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}
      >
        <input 
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
        type ="text" />
        <div>
          <button>Add</button>
        </div>
      </form>
      
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <input onChange={(event) => {
              handleToggleTodoComplete(i);
            }} checked= {todo.complete} type="checkbox" />
            <span>{todo.text}</span>
            <button onClick={(event) => {
                handleNewTodoDelete(i);
              }}
              style={{marginLeft: "10px"}}
            >
                Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
