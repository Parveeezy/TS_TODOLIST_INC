import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { v4 } from 'uuid';

export type FilteredTasksTypes = 'all' | 'active' | 'complete';

function App() {

    const TaskTitle_1 = 'What to learn?';

    let [tasks, setTasks] = useState([
        { id: v4(), title: 'HTML&CSS', isDone: true },
        { id: v4(), title: 'JS', isDone: true },
        { id: v4(), title: 'React', isDone: false },
    ]);

    let [filteredTasks, setFilteredTasks] = useState<FilteredTasksTypes>('all');
    let tasksForTodoList = tasks;

    const addTask = (value: string) => {
        setTasks([
            ...tasks, {
                id: v4(),
                title: value,
                isDone: false,
            }]);
    };

    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    };

    if (filteredTasks === 'active') {
        tasksForTodoList = tasks.filter(t => !t.isDone);
    }
    if (filteredTasks === 'complete') {
        tasksForTodoList = tasks.filter(t => t.isDone);
    }

    const changeFilter = (filter: FilteredTasksTypes) => {
        setFilteredTasks(filter);
    };

    const changeTaskStatus = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t));
    };

    const changeTaskTitleValue = (id: string, newValue: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, title: newValue } : t));
    };

    return (
        <div className="App">
            <TodoList
                title={TaskTitle_1}
                tasks={tasksForTodoList}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitleValue={changeTaskTitleValue}
            />
        </div>
    );
}

export default App;
