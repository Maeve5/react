import React, {useState, useRef} from 'react';

const Add = ({todoLists, onAdd}) => {

    const [data, setData] = useState('');
    const input = useRef(null);

    const _onChange = (e) => {
        setData(e.target.value)
    }

    return (<article className="todoWrap">
        {todoLists.map((row, idx) => {
            return (
                <div key={idx}>
                    <input
                        type="text"
                        id={row.id}
                        name="todo"
                        value={row.todo}
                        className='todoInput'
                        readOnly
                        placeholder='할 일을 입력하세요.' />
                        
                </div>)
        })}
        <div>
            <input
                type="text"
                name="todo"
                value={data}
                onChange={_onChange}
                className='todoInput'
                placeholder='할 일을 입력하세요.'
                autoComplete='off'
                ref={input} />
            <input
                type="button"
                onClick={() => {
                    onAdd(data);
                    setData('')
                    input.current.focus();;
                }}
                value="Add"/>
        </div>
    </article>
    );
};

export default Add;