import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";

export type FilteredTasksTypes = 'all' | 'active' | 'complete'

function App() {

    const TaskTitle_1 = 'What to learn?';

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]);

    let [filteredTasks, setFilteredTasks] = useState<FilteredTasksTypes>('all');
    let tasksForTodoList = tasks;

    const removeTaskHandler = (id: number) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    };

    if(filteredTasks === 'active') {
        tasksForTodoList = tasks.filter(t => !t.isDone)
    }
    if(filteredTasks === 'complete') {
        tasksForTodoList = tasks.filter(t => t.isDone)
    }

    const changeFilter = (filter: FilteredTasksTypes) => {
        setFilteredTasks(filter)
    }

    return (
        <div className="App">
            <TodoList
                title={TaskTitle_1}
                tasks={tasksForTodoList}
                removeTaskHandler={removeTaskHandler}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
