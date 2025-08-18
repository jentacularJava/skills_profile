
import React from 'react';
import { SKILLS } from '../constants';
import type { SkillScores } from '../types';

interface QuestionnaireProps {
  scores: SkillScores;
  setScores: React.Dispatch<React.SetStateAction<SkillScores>>;
  onSubmit: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ scores, setScores, onSubmit }) => {
  
  const handleScoreChange = (skillName: string, value: number) => {
    setScores(prevScores => ({
      ...prevScores,
      [skillName]: value,
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">
        Skills Self-Assessment
      </h1>
      <p className="text-slate-500 mb-8 text-center">Indicate your level of skill for each area, from 0 (less skilled) to 10 (highly skilled).</p>
      <div className="space-y-8">
        {SKILLS.map(skill => (
          <div key={skill.name}>
            <label htmlFor={skill.name} className="block text-lg font-semibold text-slate-700 mb-2">
              {skill.name}
              <p className="text-sm text-slate-500 font-normal">{skill.description}</p>
            </label>
            <div className="flex items-center space-x-4">
              <input
                id={skill.name}
                type="range"
                min="0"
                max="10"
                value={scores[skill.name] ?? 5}
                onChange={(e) => handleScoreChange(skill.name, parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <span className="text-lg font-bold text-purple-600 w-12 text-center bg-purple-100 rounded-md py-1">
                {scores[skill.name] ?? 5}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button
          onClick={onSubmit}
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          View My Profile
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
