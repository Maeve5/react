import React from 'react';
import Nav from './Nav';
import View from './View';
import Add from './Add';
import Edit from './Edit';
import {useState} from 'react';

const Template = () => {

    const [mode, setMode] = useState('VIEW');
    const [id, setId] = useState(0);
    const [todoLists, setTodoLists] = useState([]);
    let content = null;

    const onAdd = (todo) => {
        const newList = {
            id: id+1,
            todo: todo
        }
        const newLists = JSON.parse(JSON.stringify(todoLists));
        newLists.push(newList);
        setTodoLists(newLists);
        setId(id+1);
    }

    const onEdit = (id, todo, isCheck) => {
        const editList = {
            id: id,
            todo: todo
        }
        const newLists = JSON.parse(JSON.stringify(todoLists));
        for (let i = 0; i < newLists.length; i++) {
            if (newLists[i].id === id) {
                newLists[i] = editList;
                break;
            }
        }
        setTodoLists(newLists);
        alert('수정되었습니다.');
    }

    const onCheck = (id, isCheck) => {
        const newLists = JSON.parse(JSON.stringify(todoLists));
        const changedLists = newLists.map((row) => {
            if (Number(row.id) === Number(id)) {
                return {...row, isCheck: isCheck};
            }
            return row;
        })
        setTodoLists(changedLists);
    }

    const onDelete = (id) => {
        const newLists = JSON.parse(JSON.stringify(todoLists));
        const changedLists = newLists.filter((row) => {
            return row.id !== id
        })
        setTodoLists(changedLists);
        alert('삭제되었습니다.');
    }

    if (mode === 'VIEW') {
        if (id === 0) {
            content = <p>ADD를 눌러 할 일을 추가하세요.</p>
        } else {
            content = <View
                todoLists={todoLists}
                onCheck={onCheck}
                onChangeMode={(id) => {
                    setId(id);
                }}/>
        }
    } else if (mode === 'ADD') {
        content = <>
            <Add todoLists={todoLists} onAdd={onAdd} />
        </>
    } else if (mode === 'EDIT') {
        let todo = null;
        todoLists.forEach(s => {
            if (s.id === id) {
                todo = s.todo;
            }
            content = <Edit
                todo={todo}
                todoLists={todoLists}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        })
    }

    return (
        <main className='todolistTemplate'>
            <header className='title'>
                To do List
            </header>
            <Nav
                mode={mode}
                className='todoNav'
                onChangeMode={(title) => {
                    setMode(title);
                }}/>
            <section className='formWrap'>
                {content}
            </section>
        </main>
    );
};

export default Template;