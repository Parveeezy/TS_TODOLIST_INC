import React from 'react';

type TodoListHeaderPropsTypes = {
    title: string
}

const TodoListHeader = ({ title }: TodoListHeaderPropsTypes) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ margin: 0 }}>{title}</h2>
            <button>x</button>
        </div>
    );
};

export default TodoListHeader;