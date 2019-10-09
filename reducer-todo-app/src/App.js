import React, { useReducer } from 'react';
import './App.css';

//Reducers
import { reducer, todoInitialState } from "./Reducers";

//Components
import TodoList from './Components/TodoList';
import { Header } from "./Components/Header"

function App() {
const [todos, dispatch] = useReducer(reducer, todoInitialState);
  return (
    <div className="App">
      <Header todos={todos} dispatch={dispatch}/>
      <TodoList todos={todos} dispatch={dispatch}/>
    </div>
  );
}

export default App;
