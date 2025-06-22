import React from 'react';
import { Food } from '../types';

interface ResultScreenProps {
  currentFood: Food;
  isCorrect: boolean;
  userAnswer: string;
  onNextQuestion: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  currentFood,
  isCorrect,
  userAnswer,
  onNextQuestion
}) => {
  return (
    <div className="result-section">
      <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect ? 'Correct!' : 'Incorrect'}
      </div>
      {!isCorrect && userAnswer && (
        <div className="user-answer">
          Your answer: {userAnswer}
        </div>
      )}
      <div 
        className="correct-answer clickable"
        onClick={onNextQuestion}
        title="Click for next question"
      >
        Answer: {currentFood.name}
      </div>
    </div>
  );
};

export default ResultScreen;