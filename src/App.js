import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      timeSpent: 0,
      isRunning: false
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter(task => task.id !== taskId));
  };
  

  const updateTaskTime = (taskId, time) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, timeSpent: time } : task));
  };

  const toggleTaskTimer = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isRunning: !task.isRunning } : task));
  };

  const resetTimer = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, timeSpent: 0, isRunning: false } : task));
  };

  
  

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        removeTask={removeTask} 
        updateTaskTime={updateTaskTime} 
        toggleTaskTimer={toggleTaskTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default App;
