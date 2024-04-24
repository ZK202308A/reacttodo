import React, {useState} from 'react';
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

let sequence = 3

function TodoWrapper() {

    const [todos, setTodos] = useState([
        {tno:1, title:"AAAA"},
        {tno:2, title:"AAAA"},

    ])

    const addTodo = (title) => {

        const target = {tno: sequence++, title:title }

        setTodos(() => [...todos, target])
    }

    const removeTodo = (tno) => {

        setTodos (() => todos.filter(todo => todo.tno !== parseInt(tno)))

    }


    return (
        <div>

            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos}  removeTodo={removeTodo}/>


        </div>
    );
}

export default TodoWrapper;