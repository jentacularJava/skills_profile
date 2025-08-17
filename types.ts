
export interface Skill {
  name: string;
  description: string;
}

export type SkillScores = Record<string, number>;

export type AppState = 'intro' | 'questionnaire' | 'results';

export interface ChartData {
  skill: string;
  user: number;
}