import React, { useState, useEffect } from 'react';
import { getRandomFood } from '../data/foods';
import { Food } from '../types';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';

const WordQuiz: React.FC = () => {
  const [currentFood, setCurrentFood] = useState<Food | null>(null);
  const [currentFoodIndex, setCurrentFoodIndex] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = (): void => {
    const { food, index } = getRandomFood(currentFoodIndex);
    setCurrentFood(food);
    setCurrentFoodIndex(index);
    setUserAnswer('');
    setShowResult(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!userAnswer.trim() || showResult || !currentFood) return;

    setShowResult(true);
  };

  const handleNextQuestion = (): void => {
    generateNewQuestion();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserAnswer(e.target.value);
  };

  if (!currentFood) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <h1>Food Quiz</h1>
      
      {!showResult ? (
        <QuestionScreen
          currentFood={currentFood}
          userAnswer={userAnswer}
          onAnswerChange={handleInputChange}
          onSubmit={handleSubmit}
          isAnswered={showResult}
        />
      ) : (
        <ResultScreen
          currentFood={currentFood}
          isCorrect={userAnswer.toLowerCase().trim() === currentFood.name.toLowerCase()}
          userAnswer={userAnswer}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default WordQuiz;