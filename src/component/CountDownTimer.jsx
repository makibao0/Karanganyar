import React, { useEffect, useRef, useState } from 'react';

import CountDownCard from './CountDownCard';

const CountDownTimer = () => {
  //card ref
  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  //state
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    seconds === 0 && setSeconds(59);
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        SecondsCardRef.current.classList.toggle('rotate');
      }, 1000);
    }
    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes - 1);
      MinutesCardRef.current.classList.toggle('rotate');
    }
    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
      HoursCardRef.current.classList.toggle('rotate');
    }
  }, [seconds, minutes, hours]);
  return (
    <div className="countdown__container">
      <CountDownCard
        label="hours"
        number={hours.toString().padStart(2, '0')}
        cardRef={HoursCardRef}
      />
      <CountDownCard
        label="minutes"
        number={minutes.toString().padStart(2, '0')}
        cardRef={MinutesCardRef}
      />
      <CountDownCard
        label="seconds"
        number={seconds.toString().padStart(2, '0')}
        cardRef={SecondsCardRef}
      />
    </div>
  );
};

export default CountDownTimer;


