import React from 'react';

const View = (props) => {
  const lis = []
  props.todoLists.forEach(s => {
    lis.push(<div key={s.id}>
      <input type="checkbox" />
      <input id={s.id} className='todoInput' type="text" value={s.todo} readOnly />
    </div>)
  })
  return <section className='viewWrap'>
      <article>
        {lis}
      </article>
    </section>
};

export default View;