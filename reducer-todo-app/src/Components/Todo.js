// this displays the todos

import React, { useReducer } from 'react';

import { todoInitialState, todoReducer } from "../Reducers";

const Todo = () => {
    const [{item, completed, id}, dispatch] = useReducer(todoReducer, todoInitialState);

    return(
        <div>
            <h4>{item}</h4>
        </div>
    )
}