import React from 'react';
import RadarChartComponent from './RadarChartComponent';
import { SKILLS } from '../constants';
import type { SkillScores } from '../types';

interface ResultsProps {
  scores: SkillScores;
  onStartOver: () => void;
}

const Results: React.FC<ResultsProps> = ({ scores, onStartOver }) => {
  const chartData = SKILLS.map(skill => ({
    skill: skill.name,
    user: scores[skill.name] ?? 0,
    fullMark: 10,
  }));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 md:p-12 text-center animate-fade-in w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Your Skills Profile
      </h1>
      <div className="w-full h-96 sm:h-[450px] mx-auto mb-6">
        <RadarChartComponent data={chartData} />
      </div>
      <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
        Note: Your results are not saved. Please save a copy if you wish to keep them, as refreshing or leaving the page will clear your profile.
      </p>
      <button
        onClick={onStartOver}
        className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Start Over
      </button>
    </div>
  );
};

export default Results;