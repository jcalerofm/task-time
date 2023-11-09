import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';

const Timer = ({ task, updateTaskTime, toggleTimer, resetTimer }) => {
  const [seconds, setSeconds] = useState(task.timeSpent);

  useEffect(() => {
    let interval;
    if (task.isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [task.isRunning]);

  useEffect(() => {
    if (!task.isRunning) {
      updateTaskTime(task.id, seconds);
    }
  }, [task.isRunning, seconds]); 

  const handleStartStop = () => {
    toggleTimer(task.id);
  };

  const handleReset = () => {
    resetTimer(task.id);
  };

  // Formatear tiempo para mostrar
  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);

  return (
    <div className="task-timer">
      <span>{formattedTime}</span>
      <button onClick={handleStartStop} className="icon-button">
        <FontAwesomeIcon icon={task.isRunning ? faPause : faPlay} />
      </button>
      <button onClick={handleReset} className="icon-button">
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

export default Timer;
