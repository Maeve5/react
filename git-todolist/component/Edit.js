import React from 'react';
import {useState} from 'react';

const Edit = (props) => {
    const [todo, setTodo] = useState(props.todo);
    return <article>
    <form onSubmit={event => {
        event.preventDefault();
        const todo = event.target.todo.value;
        props.onEdit(todo);
    }}>
        <input type="checkbox" />
        <input type="text" name="todo" className='todoInput' placeholder='할 일을 입력하세요.' autoComplete='off' value={todo} onChange={event => {
            setTodo(event.target.value);
        }}/>
        <input type="submit" value="Edit"/>
    </form>
</article>
};

export default Edit;