import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw } from 'lucide-react';
import Timer from './components/Timer';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import TimerSettings from './components/TimerSettings';

function App() {
  const [isStanding, setIsStanding] = useState(false);
  const [sittingTime, setSittingTime] = useState(25);
  const [standingTime, setStandingTime] = useState(5);
  const [time, setTime] = useState(sittingTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [stats, setStats] = useState({ standing: 0, sitting: 0 });

  useEffect(() => {
    let interval: number | undefined;

    if (isActive && time > 0) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsStanding((prev) => !prev);
      setTime(isStanding ? sittingTime * 60 : standingTime * 60);
      if (!isMuted) {
        new Audio('/notification.mp3').play().catch(error => console.error('Error playing audio:', error));
      }
      updateStats();
    }

    return () => clearInterval(interval);
  }, [isActive, time, isStanding, isMuted, sittingTime, standingTime]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTime(sittingTime * 60);
    setIsStanding(false);
  };

  const updateStats = () => {
    setStats((prev) => ({
      standing: prev.standing + (isStanding ? standingTime : 0),
      sitting: prev.sitting + (isStanding ? 0 : sittingTime),
    }));
  };

  const handleTimerSettingsChange = (newSittingTime: number, newStandingTime: number) => {
    setSittingTime(newSittingTime);
    setStandingTime(newStandingTime);
    setTime(isStanding ? newStandingTime * 60 : newSittingTime * 60);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">StandSit Timer</h1>
        <div className="flex space-x-6">
          <button onClick={() => setIsMuted(!isMuted)} className="p-2 rounded-full hover:bg-gray-700">
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          <TimerSettings
            sittingTime={sittingTime}
            standingTime={standingTime}
            onSave={handleTimerSettingsChange}
          />
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-8 space-y-12">
        <div className={`w-80 h-80 rounded-full flex items-center justify-center mb-8 transition-all duration-300 ${isStanding ? 'bg-green-500' : 'bg-blue-500'}`}>
          <Timer time={time} isStanding={isStanding} />
        </div>

        <div className="flex space-x-6 mb-8">
          <button onClick={toggleTimer} className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center text-lg">
            {isActive ? <Pause size={28} className="mr-3" /> : <Play size={28} className="mr-3" />}
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={resetTimer} className="px-8 py-4 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 flex items-center text-lg">
            <RotateCcw size={28} className="mr-3" />
            Reset
          </button>
        </div>

        <Stats stats={stats} />
      </main>

      <Benefits />

      <footer className="p-6 text-center text-sm text-gray-400">
        © 2024 StandSit Timer. All rights reserved.
      </footer>
    </div>
  );
}

export default App;