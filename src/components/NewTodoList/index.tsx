import React from 'react';
import { NewTodoListTitle, NewTodoListWrapper } from './components';
import { ButtonUi } from '../ui/Button/Button';
import InputUi from '../ui/Input';

const NewTodoList = () => {
    return (
        <>
            <NewTodoListTitle>Todo List</NewTodoListTitle>
            <NewTodoListWrapper>
                <InputUi
                    value={''}
                    onChange={() => {}}
                    placeholder={'Add your new Todo List'}
                />
                <ButtonUi
                    title={'Add'}
                    onClick={() => {}}
                />
            </NewTodoListWrapper>
        </>

    );
};

export default NewTodoList;