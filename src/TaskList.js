import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, removeTask, updateTaskTime, toggleTaskTimer, resetTimer }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          updateTaskTime={updateTaskTime}
          toggleTaskTimer={toggleTaskTimer}
          resetTimer={resetTimer}
        />
      ))}
    </div>
  );
};

export default TaskList;
