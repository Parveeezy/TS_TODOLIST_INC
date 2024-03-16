import React from 'react';
import { ButtonUi } from '../ui/Button/Button';
import { TodoListHeaderWrapper } from './components';

type TodoListHeaderPropsTypes = {
    title: string
    removeTodoListHandler: (todoListId: string) => void
    todoListId: string
}

export const TodoListHeader = ({ title, removeTodoListHandler, todoListId }: TodoListHeaderPropsTypes) => {
    return (
        <TodoListHeaderWrapper>
            <h2>{title}</h2>
            <ButtonUi
                title={'x'}
                onClick={() => removeTodoListHandler(todoListId)}
            />
        </TodoListHeaderWrapper>
    );
};