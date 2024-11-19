import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export interface HighScore {
  name: string;
  time: number;
  word: string;
  date: string;
}

export function getLocalHighScores(): HighScore[] {
  const scores = localStorage.getItem('highScores');
  return scores ? JSON.parse(scores) : [];
}

export function isNewHighScore(time: number): boolean {
  const scores = getLocalHighScores();
  return scores.length < 5 || time < Math.max(...scores.map(s => s.time));
}

export function saveHighScore(score: HighScore) {
  const scores = getLocalHighScores();
  const newScores = [...scores, score]
    .sort((a, b) => a.time - b.time)
    .slice(0, 5);
  localStorage.setItem('highScores', JSON.stringify(newScores));
  return newScores;
}