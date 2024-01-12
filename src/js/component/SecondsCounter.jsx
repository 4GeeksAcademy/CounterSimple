import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';

const Seconds = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    if (!intervalId) {
      const newInterval = setInterval(() => {
        setCounter((prevCounter) => (prevCounter + 1) % 100000);
      }, 1000);
      setIntervalId(newInterval);
    }
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetInterval = () => {
    stopInterval();
    setCounter(0);
  };

  // Función para obtener un array de dígitos del contador
  const getDigitsArray = () => {
    return counter.toString().padStart(5, '0').split('').map(Number);
  };

  // Función para renderizar el contador con todos los dígitos
  const renderCounter = () => {
    const digits = getDigitsArray();

    return (
      <div className="counter-container">
        {digits.map((digit, index) => (
          <div key={index} className="counter-box">
            <h1>{digit}</h1>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    // Cambiar el último dígito cada segundo
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 100000);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Se ejecuta solo al montar el componente

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="icon-box">
          <FontAwesomeIcon icon={faClock} className="clock-icon" />
        </div>
        {renderCounter()}
      </div>
      <div className="controls">
        <button onClick={stopInterval}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button onClick={startInterval}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={resetInterval}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
    </div>
  );
};

export default Seconds;
