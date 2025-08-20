import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { ChartData } from '../types';

interface RadarChartComponentProps {
  data: ChartData[];
}

// Custom tick component with responsive text wrapping
const CustomTick = (props: any) => {
  const { payload, x, y, textAnchor, cx, cy } = props;
  
  // Simple viewport-based sizing using CSS clamp() logic
  const vw = window.innerWidth;
  const fontSize = Math.max(8, Math.min(14, vw * 0.02)); // clamp(8px, 2vw, 12px)
  const maxChars = Math.max(8, Math.min(15, vw * 0.012)); // Simpler char-based wrapping
  
  // Basic text wrapping by character count (simpler than width calculation)
  const wrapText = (text: string, maxChars: number) => {
    if (text.length <= maxChars) return [text];
    
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const testLine = `${currentLine} ${words[i]}`;
      if (testLine.length <= maxChars) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const lines = wrapText(payload.value, maxChars);
  
  // Position labels closer to chart center
  // 0.85 factor moves labels 15% closer - simple and effective
  const adjustedX = cx + (x - cx) * 0.85;
  const adjustedY = cy + (y - cy) * 0.85;

  return (
    <g>
      {lines.map((line, index) => (
        <text
          key={index}
          x={adjustedX}
          y={adjustedY + (index - (lines.length - 1) / 2) * fontSize * 1.2}
          textAnchor={textAnchor}
          fill="#475569"
          fontSize={fontSize}
          fontWeight="500"
          dominantBaseline="middle"
        >
          {line}
        </text>
      ))}
    </g>
  );
};

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="skill" tick={<CustomTick />} />
        <PolarRadiusAxis 
          angle={90}
          domain={[0, 10]}
          tickCount={6}
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