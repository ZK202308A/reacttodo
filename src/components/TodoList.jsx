import React from 'react';

function TodoList({todos, removeTodo}) {

    return (
        <div>
            <h1>Todo List </h1>

            <ul>
                {todos?.map( todo =>
                    <li key={todo.tno}>
                        {todo.tno} --- {todo.title}
                        <button onClick={() => removeTodo(todo.tno)}>REMOVE</button>
                    </li>)
                }
            </ul>

        </div>
    );
}

export default TodoList;