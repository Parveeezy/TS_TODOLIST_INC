import React, {ChangeEvent} from 'react';
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import Button from "../ui/Button/Button";
import {FilteredTasksTypes} from "../../App";

export type TasksPropsTypes = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsTypes = {
    title: string
    tasks: TasksPropsTypes[]
    removeTaskHandler: (id: number) => void
    changeFilter: (filter: FilteredTasksTypes) => void
};

export const TodoList = (props: TodoListPropsTypes) => {

    const {
        title,
        tasks,
        removeTaskHandler,
        changeFilter
    } = props;

    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    let tasksList = tasks.length === 0
        ? <span>No tasks...</span>
        : (
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={checkboxHandler}
                            />
                            <span>{task.title}</span>
                            <button onClick={() => removeTaskHandler(task.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
        )
    ;

    return (
        <div className={'todolist'}>
            <TodoListHeader title={title}/>
            <div>
                <input/>
                <button>+</button>
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
