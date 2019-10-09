// this displays the todos

import React from 'react';

// import { todoInitialState, reducer } from "../Reducers";

 const Todo = props => {
    console.log(props);
    // const [{item, completed, id}, dispatch] = useReducer(reducer, todoInitialState);

    return(
        <div className={`item${props.todo.completed} ? -toggled : null`}
        onClick={() => props.toggleItem(props.todo.completed)}
        >
            <h4>{props.todo.item}</h4>
        </div>
    )
};

export default Todo;