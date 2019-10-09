// this is where the list is compliled
import React, { useState, useReducer } from "react";

import { todoInitialState, todoReducer } from "../Reducers";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
    console.log(state);
  };

  return (
    <div>
      <h2>is this working???</h2>
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
      ></input>
      <button
        onClick={() => dispatch({ type: "ADD_NEW_TODO", payload: newTodo })}
      >
        Add
      </button>
    </div>
  );
};

export default TodoList;
