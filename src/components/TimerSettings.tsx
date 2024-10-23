import React, { useState } from 'react';
import { Settings } from 'lucide-react';

interface TimerSettingsProps {
  sittingTime: number;
  standingTime: number;
  onSave: (sitting: number, standing: number) => void;
}

const TimerSettings: React.FC<TimerSettingsProps> = ({ sittingTime, standingTime, onSave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sitting, setSitting] = useState(sittingTime);
  const [standing, setStanding] = useState(standingTime);

  const handleSave = () => {
    onSave(sitting, standing);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
      >
        <Settings size={24} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Timer Settings</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Sitting Time (minutes)</label>
              <input
                type="number"
                value={sitting}
                onChange={(e) => setSitting(Number(e.target.value))}
                className="w-full p-2 bg-gray-700 rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Standing Time (minutes)</label>
              <input
                type="number"
                value={standing}
                onChange={(e) => setStanding(Number(e.target.value))}
                className="w-full p-2 bg-gray-700 rounded"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 transition-colors duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimerSettings;