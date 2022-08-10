import React from 'react';

const Add = (props) => {
    return <article>
        <form onSubmit={event => {
            event.preventDefault();
            const todo = event.target.todo.value;
            props.onAdd(todo);
        }}>
            <input type="checkbox" />
            <input type="text" name="todo" className='todoInput' placeholder='할 일을 입력하세요.' autoComplete='off' />
            <input type="submit" value="Add"/>
        </form>
    </article>
};

export default Add;