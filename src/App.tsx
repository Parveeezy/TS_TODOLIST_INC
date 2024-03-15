import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { v4 } from 'uuid';
import NewTodoList from './components/NewTodoList';
import { Container } from '@mui/material';

export type FilteredTasksTypes = 'all' | 'active' | 'completed';

export type TodoListsTypes = {
    id: string,
    title: string,
    filter: FilteredTasksTypes
}

export type TasksTypes = {
    id: string
    title: string
    isDone: boolean
};

function App() {

    let todoListId1 = v4();
    let todoListId2 = v4();

    let [todoLists, setTodoLists] = useState<TodoListsTypes[]>([
        { id: todoListId1, title: 'What to learn?', filter: 'all' },
        { id: todoListId2, title: 'What to buy?', filter: 'all' },
    ]);

    let [tasks, setTasks] = useState({
        [todoListId1]: [
            { id: v4(), title: 'HTML&CSS', isDone: true },
            { id: v4(), title: 'JS', isDone: true },
            { id: v4(), title: 'React', isDone: false },
        ],
        [todoListId2]: [
            { id: v4(), title: 'Milk', isDone: true },
            { id: v4(), title: 'Apple', isDone: true },
            { id: v4(), title: 'Juice', isDone: false },
        ],
    });

    const addTask = (newValue: string, todoListId: string) => {
        setTasks({
            ...tasks, [todoListId]: [{
                id: v4(),
                title: newValue,
                isDone: false,
            }, ...tasks[todoListId]],
        });
    };

    const removeTodoList = (todoListId: string) => {
        setTodoLists(todoLists.filter(t => t.id !== todoListId));
        delete tasks[todoListId];
    };

    const removeTask = (id: string, todoListId: string) => {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId].filter(t => t.id !== id),
        });
    };

    const changeFilter = (filter: FilteredTasksTypes, todolistId: string) => {
        setTodoLists(todoLists.map(tl => (tl.id === todolistId ? { ...tl, filter } : tl)));
    };

    const changeTaskStatus = (taskStatus: boolean, taskId: string, todoListId: string) => {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId]
                .map(t => (t.id === taskId
                        ? { ...t, isDone: taskStatus }
                        : t
                )),
        });
    };

    const changeTaskTitleValue = (taskId: string, todoListId: string, newValue: string) => {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId]
                .map(t => (t.id === taskId ? { ...t, title: newValue } : t)),
        });
    };

    return (
        <Container>
            <NewTodoList />
            {todoLists.map(tl => {

                const allTodolistTasks = tasks[tl.id];
                let tasksForTodoList = allTodolistTasks;

                if (tl.filter === 'active') {
                    tasksForTodoList = allTodolistTasks.filter(task => !task.isDone);
                }

                if (tl.filter === 'completed') {
                    tasksForTodoList = allTodolistTasks.filter(task => task.isDone);
                }

                return (
                    <TodoList
                        key={tl.id}
                        title={tl.title}
                        tasks={tasksForTodoList}
                        todoListId={tl.id}
                        filter={tl.filter}
                        addTask={addTask}
                        removeTodoList={removeTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        changeTaskStatus={changeTaskStatus}
                        changeTaskTitleValue={changeTaskTitleValue}
                    />
                );
            })}
        </Container>
    );
}

export default App;
