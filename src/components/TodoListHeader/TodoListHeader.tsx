import React from 'react';
import Button from '../ui/Button/Button';

type TodoListHeaderPropsTypes = {
    title: string
    removeTodoListHandler: (todoListId: string) => void
    todoListId: string
}

const TodoListHeader = ({ title, removeTodoListHandler, todoListId }: TodoListHeaderPropsTypes) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ margin: 0 }}>{title}</h2>
            <Button
                title={'x'}
                onClick={() => removeTodoListHandler(todoListId)}
            />
        </div>
    );
};

export default TodoListHeader;