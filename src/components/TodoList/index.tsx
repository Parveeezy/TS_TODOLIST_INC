import React, { ChangeEvent, useState } from 'react';
import { FilteredTasksTypes, TasksTypes } from '../../App';
import { EditableSpan } from '../EditableSpan';
import { ButtonUi } from '../ui/Button/Button';
import {
    TodoListButtonsStatusGroup,
    TodoListTask,
    TodoListTasksWrapper,
    TodoListWrapper,
} from './components';
import { StatusButtonUi } from '../ui/StatusButton/StatusButton';
import { TodoListHeader } from '../TodoListHeader';
import InputUi from '../ui/Input';

type TodoListPropsTypes = {
    title: string
    tasks: TasksTypes[]
    todoListId: string
    filter: FilteredTasksTypes
    addTask: (newValue: string, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
    removeTask: (id: string, todoListId: string) => void
    changeFilter: (filter: FilteredTasksTypes, todoListId: string) => void
    changeTaskStatus: (taskStatus: boolean, taskId: string, todoListId: string) => void
    changeTaskTitleValue: (id: string, todoListId: string, newValue: string) => void
};

export const TodoList = (props: TodoListPropsTypes) => {

    const {
        title,
        tasks,
        todoListId,
        addTask,
        removeTodoList,
        removeTask,
        changeFilter,
        changeTaskStatus,
        changeTaskTitleValue,
    } = props;

    const [value, setValue] = useState<string>('');

    const addNewTask = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const removeTodoListHandler = (todoListId: string) => {
        removeTodoList(todoListId);
    };

    const addTaskHandler = () => {
        if(value) {
            addTask(value, todoListId);
            setValue('');
        }
    };

    const changeFilterHandler = (filter: FilteredTasksTypes) => {
        changeFilter(filter, todoListId);
    };

    const removeTaskHandler = (id: string) => {
        removeTask(id, todoListId);
    };

    const changeTaskValueHandler = (id: string, todoListId: string, newValue: string) => {
        changeTaskTitleValue(id, todoListId, newValue);
    };

    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>, taskId: string) => {
        changeTaskStatus(e.target.checked, taskId, todoListId);
    };

    let tasksList = tasks.length === 0
        ? <div><span>No tasks...</span></div>
        : (
            <TodoListTasksWrapper>
                {tasks.map((task) => {
                    return (
                        <TodoListTask key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={(e) => changeTaskStatusHandler(e, task.id)}
                            />
                            <EditableSpan
                                title={task.title}
                                onChange={(val) => changeTaskValueHandler(task.id, todoListId, val)}
                            />
                            <ButtonUi title={'x'} onClick={() => removeTaskHandler(task.id)} />
                        </TodoListTask>
                    );
                })}
            </TodoListTasksWrapper>
        );

    return (
        <TodoListWrapper>
            <TodoListHeader
                title={title}
                removeTodoListHandler={() => removeTodoListHandler(todoListId)}
                todoListId={todoListId}
            />
            <div>
                <InputUi
                    value={value}
                    onChange={(e) => addNewTask(e)}
                    placeholder={'Add task...'}
                />
                <ButtonUi title={'+'} onClick={addTaskHandler} />
            </div>
            {tasksList}
            <TodoListButtonsStatusGroup variant="outlined" size="small">
                <StatusButtonUi
                    title={'All'}
                    onClick={() => changeFilterHandler('all')}
                />
                <StatusButtonUi
                    title={'Active'}
                    onClick={() => changeFilterHandler('active')}
                />
                <StatusButtonUi
                    title={'Complete'}
                    onClick={() => changeFilterHandler('completed')}
                />
            </TodoListButtonsStatusGroup>
        </TodoListWrapper>
    );
};
