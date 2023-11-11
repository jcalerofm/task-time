import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';

const Timer = ({ task, updateTaskTime, toggleTimer, resetTimer }) => {
  const [seconds, setSeconds] = useState(task.timeSpent);
  const [isRunning, setIsRunning] = useState(task.isRunning);

  // Sincroniza el estado local `isRunning` con el estado global `task.isRunning`
  useEffect(() => {
    setIsRunning(task.isRunning);
  }, [task.isRunning]);

  // Sincroniza el estado local `seconds` con el estado global `task.timeSpent`
  useEffect(() => {
    setSeconds(task.timeSpent);
  }, [task.timeSpent]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Actualiza el tiempo en el estado global cuando el contador se detiene o el componente se desmonta
  useEffect(() => {
    updateTaskTime(task.id, seconds);
  }, [seconds, task.id, updateTaskTime]);

  // Manejador para iniciar/detener el temporizador
  const handleStartStop = () => {
    setIsRunning(!isRunning);
    toggleTimer(task.id);
  };

  // Manejador para reiniciar el temporizador
  const handleReset = () => {
    setSeconds(0);
    resetTimer(task.id);
  };

  // Formatea el tiempo para mostrarlo
  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);

  return (
    <div className="task-timer">
      <span>{formattedTime}</span>
      <button onClick={handleStartStop} className="icon-button">
        <FontAwesomeIcon icon={isRunning ? faPause : faPlay} />
      </button>
      <button onClick={handleReset} className="icon-button">
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

export default Timer;
