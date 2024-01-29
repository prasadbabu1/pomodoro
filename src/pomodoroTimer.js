// PomodoroTimer.js
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import clockalarm from './clock-alarm.mp3'; // Place a notification sound file in the public folder
import { useLocation, useNavigate } from 'react-router-dom';

const PomodoroTimer = () => {
    const navigate =useNavigate()
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [play] = useSound(clockalarm);

  const { state } =useLocation();
  //   console.log(state.timer);
  useEffect(() => {
    if (state && state.timer) {
      setMinutes(state.timer);
      setSeconds(state.timer)
    } else {
      setMinutes(1);
      setSeconds(0);
    }
  }, [state]);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Pomodoro session completed, play sound, and reset the timer
            play();
            resetTimer();
          } else {
            // Move to the next minute
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          // Decrease the seconds
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds, play]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(1);
    setSeconds(0);
  };

  return (
 <div className='maincell'>
       <div className="pomodoro-timer cell">
      <h1>Pomodoro Timer</h1>
      <div className="timer-display">
        <p>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
      <div className="timer-controls">
        <button className='btn btn-primary' onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button className='btn btn-success' onClick={resetTimer}>Reset</button>
        <button className='btn btn-info' onClick={()=>{navigate("/customise")}} >customise</button>
      </div>
    </div>
 </div>
  );
};

export default PomodoroTimer;
