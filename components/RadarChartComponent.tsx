import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { ChartData } from '../types';

interface RadarChartComponentProps {
  data: ChartData[];
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="skill" tick={{ fill: '#475569', fontSize: 13 }} />
        <PolarRadiusAxis 
          angle={90} 
          domain={[0, 10]} 
          tickCount={6} // Creates 5 grid circles (0, 2, 4, 6, 8, 10)
          tick={false} 
          axisLine={false} 
        />
        <Radar 
          name="Your Profile" 
          dataKey="user" 
          stroke="#8B5CF6" 
          fill="#A78BFA" 
          fillOpacity={0.6} 
          strokeWidth={2} 
          dot={{ r: 3, fill: '#8B5CF6', stroke: '#A78BFA' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;