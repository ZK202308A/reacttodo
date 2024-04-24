import React, {useState} from 'react';

function TodoInput({addTodo}) {

    const [text, setText] = useState('')

    const handleChange = (e) => {

        setText(e.target.value)

    }

    const handleClick = () => {

        addTodo(text)
        setText('')
    }


    return (
        <div>
            <h1>Todo Input</h1>
            <input type="text" value={text}  onChange={handleChange}/>
            <button onClick={handleClick} >SEND</button>
        </div>
    );
}

export default TodoInput;