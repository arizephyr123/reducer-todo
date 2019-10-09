import React, { useReducer, useState } from "react";
// import { todoInitialState, reducer } from "../Reducers";

export const Header = props => {
//   const [state, dispatch] = useReducer(reducer, todoInitialState);
console.log(props);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
   
  };

  return (
    <>
      <div>
        <h1>To Do List</h1>
      </div>
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        ></input>
        <button
          onClick={() => props.dispatch({ type: "ADD_NEW_TODO", payload: newTodo })}
        >
          Add
        </button>
      </div>
    </>
  );
};
