import React from 'react';



const View = ({todoLists, onCheck}) => {

  const _onCheck = (e) => {
    const check = e.target;
    onCheck(check.id, check.checked);
  }

  const lis = []
  todoLists.forEach(s => {
    lis.push(<div key={s.id}>
      <input id={s.id} type="checkbox" className='checkbox' onChange={_onCheck} checked={s.isCheck ? true : false}/>
      <input style={{textDecoration: s.isCheck ? 'line-through' : 'none'}} id={s.id} value={s.todo} className='todoInput' type="text" readOnly />
    </div>)
  })
  return (
    <article className='viewWrap'>
      {lis}
    </article>
  );
};

export default View;