import React, { ChangeEvent, useState } from 'react';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import Button from '../ui/Button/Button';
import { FilteredTasksTypes } from '../../App';
import { EditableSpan } from '../EditableSpan/EditableSpan';

export type TasksPropsTypes = {
    id: string
    title: string
    isDone: boolean
};

type TodoListPropsTypes = {
    title: string
    tasks: TasksPropsTypes[]
    addTask: (value: string) => void
    removeTask: (id: string) => void
    changeFilter: (filter: FilteredTasksTypes) => void
    changeTaskStatus: (id: string) => void
    changeTaskTitleValue: (id: string, newValue: string) => void
};

export const TodoList = (props: TodoListPropsTypes) => {

    const {
        title,
        tasks,
        addTask,
        removeTask,
        changeFilter,
        changeTaskStatus,
        changeTaskTitleValue,
    } = props;

    const [value, setValue] = useState<string>('');

    const addNewTask = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const addTaskHandler = () => {
        addTask(value);
        setValue('');
    };

    const changeFilterHandler = (filter: FilteredTasksTypes) => {
        changeFilter(filter);
    };

    const removeTaskHandler = (id: string) => {
        removeTask(id);
    };

    const changeTaskValueHandler = (id: string, newValue: string) => {
        changeTaskTitleValue(id, newValue);
    };

    let tasksList = tasks.length === 0
        ? <span>No tasks...</span>
        : (
            <ul style={{ margin: 0, padding: 0 }}>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            < input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={() => changeTaskStatus(task.id)}
                            />
                            <EditableSpan
                                title={task.title}
                                onChange={(val) => changeTaskValueHandler(task.id, val)}
                            />
                            <Button title={'x'} onClick={() => removeTaskHandler(task.id)} />
                        </li>
                    );
                })}
            </ul>
        );

    return (
        <div className={'todolist'}>
            <TodoListHeader title={title} />
            <div>
                <input
                    value={value}
                    onChange={(e) => addNewTask(e)}
                />
                <Button title={'+'} onClick={addTaskHandler} />
            </div>
            {tasksList}
            <div>
                <Button
                    title={'All'}
                    onClick={() => changeFilterHandler('all')}
                />
                <Button
                    title={'Active'}
                    onClick={() => changeFilterHandler('active')}
                />
                <Button
                    title={'Complete'}
                    onClick={() => changeFilterHandler('complete')}
                />
            </div>
        </div>
    );
};
