
import React from 'react';
import Countdown from 'react-countdown-now';
import './CountTimeDown.css';

const CountTimeDown = () => {
  
  const calculateTimeLeft = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow - now;
  };

  
  const renderer = ({ hours, minutes, seconds }) => (
    <div>
    <div className="countdown-display">
      <div className="countdown-timer">
        <span className="countdown-unit">{hours.toString().padStart(2, '0')}</span>:
        <span className="countdown-unit">{minutes.toString().padStart(2, '0')}</span>:
        <span className="countdown-unit">{seconds.toString().padStart(2, '0')}</span>
        
      </div>
      
    </div>
    <div className="countdown-text"><p>год</p>
        <p>хв</p>
          <p>ceк</p></div>
    </div>
  );

  return (
    <div>
      <Countdown date={Date.now() + calculateTimeLeft()} renderer={renderer} />
    </div>
  );
};

export default CountTimeDown;
