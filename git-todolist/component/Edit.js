import React from 'react';
import EditForm from './EditForm';

const Edit = ({todoLists, todo, onEdit, onDelete}) => {

    return (
        <article className="todoWrap">
            {todoLists.map((row, idx) => {
                return (
                    <EditForm
                    key={`edit-form-${idx}`}
                    id={row.id}
                    todo={row.todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    />
                    )
                })}
        </article>
    )
};

export default Edit;