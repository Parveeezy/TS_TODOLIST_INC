import React, { ChangeEvent, useState } from 'react';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import Button from '../ui/Button/Button';
import { FilteredTasksTypes, TasksTypes } from '../../App';
import { EditableSpan } from '../EditableSpan/EditableSpan';

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
        removeTodoList(todoListId)
    }

    const addTaskHandler = () => {
        addTask(value, todoListId);
        setValue('');
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
        ? <span>No tasks...</span>
        : (
            <ul style={{ margin: 0, padding: 0 }}>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            < input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={(e) => changeTaskStatusHandler(e, task.id)}
                            />
                            <EditableSpan
                                title={task.title}
                                onChange={(val) => changeTaskValueHandler(task.id, todoListId, val)}
                            />
                            <Button title={'x'} onClick={() => removeTaskHandler(task.id)} />
                        </li>
                    );
                })}
            </ul>
        );

    return (
        <div className={'todolist'}>
            <TodoListHeader
                title={title}
                removeTodoListHandler={() => removeTodoListHandler(todoListId)}
                todoListId={todoListId}
            />
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
                    onClick={() => changeFilterHandler('completed')}
                />
            </div>
        </div>
    );
};
