import React from 'react';

const Nav = (props) => {
    return <div className='navWrap'>
        <a title='VIEW' className={`navItem ${(props.mode === "VIEW") && 'active'}`} href='/view' onClick={event => {
            event.preventDefault();
            props.onChangeMode(event.target.title);
        }}>VIEW</a>
        <a title='ADD' className='navItem' href='/add' onClick={event => {
            event.preventDefault();
            props.onChangeMode(event.target.title);
        }}>ADD</a>
        <a title='EDIT' className='navItem' href='/edit' onClick={event => {
            event.preventDefault();
            props.onChangeMode(event.target.title);
        }}>EDIT</a>
    </div>
};

export default Nav;