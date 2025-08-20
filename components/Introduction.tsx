import React from 'react';
import { Shapes } from 'lucide-react';

interface IntroductionProps {
  onStart: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="bg-purple-100 rounded-full p-4">
          <Shapes className="w-12 h-12 text-purple-600" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Ori
        </h1>
        <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
          Beta
        </span>
      </div>
      <p className="text-slate-600 max-w-2xl mx-auto mb-2 text-xl font-medium">
        Unfold your unique skills profile.
      </p>
      <p className="text-slate-500 max-w-2xl mx-auto mb-8">
        This tool helps you explore and reflect on your unique skills. Whether you're a student, parent, or teacher, understanding your skills profile can support self-awareness and more compassionate interactions.
      </p>
      <button
        onClick={onStart}
        className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Get Started
      </button>
    </div>
  );
};

export default Introduction;