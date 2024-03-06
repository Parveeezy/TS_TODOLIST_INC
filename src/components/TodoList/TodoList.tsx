import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import Button from "../ui/Button/Button";
import {FilteredTasksTypes} from "../../App";
import {v4} from "uuid";
import {EditableSpan} from "../EditableSpan/EditableSpan";

export type TasksPropsTypes = {
    id: string
    title: string
    isDone: boolean
};

type TodoListPropsTypes = {
    title: string
    tasks: TasksPropsTypes[]
    setTasks: Dispatch<SetStateAction<TasksPropsTypes[]>>
    removeTaskHandler: (id: string) => void
    changeFilter: (filter: FilteredTasksTypes) => void
    changeTaskStatus: (id: string) => void
    changeTaskTitleValue: (id: string, newValue: string) => void
};

export const TodoList = (props: TodoListPropsTypes) => {

    const {
        title,
        tasks,
        setTasks,
        removeTaskHandler,
        changeFilter,
        changeTaskStatus,
        changeTaskTitleValue,
    } = props;

    const [value, setValue] = useState<string>('');

    const onAddNewTask = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    };

    const addTaskHandler = (value: string) => {
        if (value) {
            setTasks([
                ...tasks, {
                    id: v4(),
                    title: value,
                    isDone: false
                }])
            setValue('')
        }
    };

    let tasksList = tasks.length === 0
        ? <span>No tasks...</span>
        : (
            <ul style={{margin: 0, padding: 0}}>
                {tasks.map((task) => {

                    const onChangeTaskValue = (id: string, newValue: string) => {
                        changeTaskTitleValue(id, newValue)
                    }

                    return (

                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={() => changeTaskStatus(task.id)}
                            />
                            <EditableSpan
                                title={task.title}
                                onChange={(val) => onChangeTaskValue(task.id, val)}
                            />
                            <button onClick={() => removeTaskHandler(task.id)}>x</button>
                            <button>edit</button>
                        </li>
                    )
                })}
            </ul>
        );

    return (
        <div className={'todolist'}>
            <TodoListHeader title={title}/>
            <div>
                <input
                    value={value}
                    onChange={(e) => onAddNewTask(e)}
                />
                <button onClick={() => addTaskHandler(value)}>+</button>
            </div>
            {tasksList}
            <div>
                <Button
                    title={'All'}
                    onClick={() => changeFilter('all')}
                />
                <Button
                    title={'Active'}
                    onClick={() => changeFilter('active')}
                />
                <Button
                    title={'Complete'}
                    onClick={() => changeFilter('complete')}
                />
            </div>
        </div>
    );
};
