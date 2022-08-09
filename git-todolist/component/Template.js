import React from 'react';
import Nav from './Nav';
import Form from './Form';
import {useState} from 'react';

const Template = () => {
  const [mode, setMode] = useState('VIEW');
  const todoList = [];
  let children = null;
  
  if (mode === 'VIEW'){
    todoList.forEach
    children = <Form todo={todo} />
  }
  else if (mode === 'ADD'){
    todoList.push
    children = <Form todo='add' />
  }
  else if (mode === 'EDIT'){
    todoList.map
    children = <Form todo='edit' />
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
        {children}
      </section>
    </main>
  );
};

export default Template;