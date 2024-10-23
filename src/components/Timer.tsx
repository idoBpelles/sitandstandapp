import React from 'react';

interface TimerProps {
  time: number;
  isStanding: boolean;
}

const Timer: React.FC<TimerProps> = ({ time, isStanding }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="text-xl">{isStanding ? 'Stand' : 'Sit'}</div>
    </div>
  );
};

export default Timer;