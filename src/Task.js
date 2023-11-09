import React from 'react';
import Timer from './Timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, removeTask, updateTaskTime, toggleTaskTimer, resetTimer }) => {
  return (
    <div className="task">
      <span className="task-text">{task.text}</span>
      <Timer 
        task={task}
        updateTaskTime={updateTaskTime}
        toggleTimer={() => toggleTaskTimer(task.id)}
        resetTimer={() => resetTimer(task.id)}
      />
      <button onClick={() => removeTask(task.id)} className="icon-button">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Task;
