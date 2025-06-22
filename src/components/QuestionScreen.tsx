import React from 'react';
import { Food } from '../types';
import SpeakerIcon from './SpeakerIcon';

interface QuestionScreenProps {
  currentFood: Food;
  userAnswer: string;
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isAnswered: boolean;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  currentFood,
  userAnswer,
  onAnswerChange,
  onSubmit,
  isAnswered
}) => {
  return (
    <>
      <div className="food-display">
        <div className="food-emoji">{currentFood.emoji}</div>
        <SpeakerIcon 
          word={currentFood.name}
          className="pronunciation-speaker"
        />
      </div>

      <form onSubmit={onSubmit} className="answer-form">
        <input
          type="text"
          value={userAnswer}
          onChange={onAnswerChange}
          placeholder="Enter the English word"
          className="answer-input"
          disabled={isAnswered}
        />
        <button 
          type="submit" 
          className="submit-button"
          disabled={!userAnswer.trim() || isAnswered}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default QuestionScreen;