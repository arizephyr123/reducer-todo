import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props.todos.todos);
  const todos = props.todos.todos;

  const toggleItem = id => {
    props.dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const clearCompleted = e => {
    props.dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleItem={toggleItem} />
      ))}
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
