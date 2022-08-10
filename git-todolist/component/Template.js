import React from 'react';
import Nav from './Nav';
import View from './View';
import Add from './Add';
import Edit from './Edit';
import {useState} from 'react';

const Template = () => {
  const [mode, setMode] = useState('VIEW');
  const [id, setId] = useState(0);
  const [nextId, setNextId] = useState(1);
  const [todoLists, setTodoLists] = useState([]);
  let content = null;
  
  if (mode === 'VIEW'){
    if (id === 0){
      content = <p>ADD를 눌러 할 일을 추가하세요.</p>
    }
    else {
      content = <View todoLists={todoLists} onChangeMode={(id)=>{
        setMode('View');
        setId(id);
      }} />
    }
  }
  else if (mode === 'ADD'){
    content = <>
      <View todoLists={todoLists} />
      <Add onAdd={(todo)=>{
      const newList = {id:nextId, todo:todo}
      const newLists = [...todoLists]
      newLists.push(newList);
      setTodoLists(newLists);
      setId(nextId);
      setNextId(nextId+1);
      console.log(todoLists);
    }} />    
    </>
  }
  else if (mode === 'EDIT'){
    let todo = null;
    todoLists.forEach(s => {
      todo = s.todo;
    })
    content = <Edit todo={todo} onEdit={(todo)=>{
      const editList = {id:nextId, todo:todo}
      const newLists = [...todoLists]
      newLists.map(editList);
      setTodoLists(newLists);
      setMode('VIEW');
    }}/>
  }

  return (
    <main className='todolistTemplate'>
      <header className='title'>
        To do List
      </header>
      <Nav className='todoNav' onChangeMode={(title)=>{
        setMode(title);
      }} />
      <section className='formWrap'>
        {content}
      </section>
    </main>
  );
};

export default Template;