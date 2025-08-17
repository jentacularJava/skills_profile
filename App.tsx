
import React, { useState, useMemo } from 'react';
import Introduction from './components/Introduction';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import { SKILLS } from './constants';
import type { SkillScores, AppState } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('intro');
  
  const initialScores = useMemo(() => 
    SKILLS.reduce((acc, skill) => {
      acc[skill.name] = 5; // Default to middle value
      return acc;
    }, {} as SkillScores),
  []);

  const [scores, setScores] = useState<SkillScores>(initialScores);

  const startQuestionnaire = () => {
    setAppState('questionnaire');
  };

  const showResults = () => {
    setAppState('results');
  };
  
  const startOver = () => {
    setScores(initialScores);
    setAppState('intro');
  }

  const renderContent = () => {
    switch (appState) {
      case 'intro':
        return <Introduction onStart={startQuestionnaire} />;
      case 'questionnaire':
        return <Questionnaire scores={scores} setScores={setScores} onSubmit={showResults} />;
      case 'results':
        return <Results scores={scores} onStartOver={startOver} />;
      default:
        return <Introduction onStart={startQuestionnaire} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
