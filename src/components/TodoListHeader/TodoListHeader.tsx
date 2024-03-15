import React from 'react';
import { ButtonUi } from '../ui/Button/Button';

type TodoListHeaderPropsTypes = {
    title: string
    removeTodoListHandler: (todoListId: string) => void
    todoListId: string
}

const TodoListHeader = ({ title, removeTodoListHandler, todoListId }: TodoListHeaderPropsTypes) => {
    return (
        <div style={{ display: 'flex'}}>
            <h2 style={{ margin: 0 }}>{title}</h2>
            <ButtonUi
                title={'x'}
                onClick={() => removeTodoListHandler(todoListId)}
            />
        </div>
    );
};

export default TodoListHeader;