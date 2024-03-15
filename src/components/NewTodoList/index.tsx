import React from 'react';
import { NewTodoListWrapper } from './components';
import { ButtonUi } from '../ui/Button/Button';

const NewTodoList = () => {
    return (
        <NewTodoListWrapper>
            <h1>Todo List</h1>
            <div>
                <input />
                <ButtonUi
                    title={'Add New Todo'}
                    onClick={() => {
                    }}
                />
            </div>
        </NewTodoListWrapper>
    );
};

export default NewTodoList;