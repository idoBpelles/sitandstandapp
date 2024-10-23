import React from 'react';

interface StatsProps {
  stats: {
    standing: number;
    sitting: number;
  };
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Your Stats</h2>
      <div className="flex justify-between space-x-8">
        <div className="text-center">
          <p className="text-3xl font-bold text-green-500">{stats.standing}</p>
          <p className="text-sm text-gray-400 mt-2">Minutes Standing</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-500">{stats.sitting}</p>
          <p className="text-sm text-gray-400 mt-2">Minutes Sitting</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;