import React, { ChangeEvent, useState } from 'react';
import { NewTodoListTitle, NewTodoListWrapper } from './components';
import { ButtonUi } from '../ui/Button/Button';
import InputUi from '../ui/Input';

type NewTodoListType = {
    addTodoList: (newTodoTitle: string) => void
}

const NewTodoList = (props: NewTodoListType) => {

    const [title, setTitle] = useState<string>('')

    const onChangeNewTodoListHandler = (event: ChangeEvent<HTMLInputElement>) => {
       if(event.currentTarget.value !== '') {
           setTitle(event.currentTarget.value)
       }
    }

    const onAddNewTodoListHandler = () => {
        if(title) {
            props.addTodoList(title)
            setTitle('')
        }
    }

    return (
        <>
            <NewTodoListTitle>Todo List</NewTodoListTitle>
            <NewTodoListWrapper>
                <InputUi
                    value={title}
                    onChange={onChangeNewTodoListHandler}
                    placeholder={'Add your new Todo List'}
                    place={'newTodoList'}
                />
                <ButtonUi
                    title={'Add'}
                    onClick={onAddNewTodoListHandler}
                />
            </NewTodoListWrapper>
        </>

    );
};

export default NewTodoList;