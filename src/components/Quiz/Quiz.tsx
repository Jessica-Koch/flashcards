import React from 'react';
import { QUESTION_BANK } from '../../assets/data';
import { FlashCard } from '../FlashCard/FlashCard';
import './Quiz.scss';
import { CircleChevronRight, Undo2 } from 'lucide-react';
import { Button } from '../Button/Button';
import { RainbowText } from '../RainbowText/RainbowText';

export const Quiz = () => {
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const onClickNext = () => {
    setActiveCardIndex((prev: number) => prev + 1);
  };

  const onClickReset = () => {
    setActiveCardIndex(0);
    setScore(0);
  };

  const onClickAnswer = (isAnswerCorrect: boolean) => {
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className='quiz'>
      <></>
      <RainbowText className='title' text='Flashcards' />
      <h2 className='score'>Your score: {score}</h2>
      <div className='quizQuestions'>
        {QUESTION_BANK.map((q, i) => (
          <FlashCard
            isActive={activeCardIndex === i}
            isPrevCard={activeCardIndex - 1 === i}
            question={q}
            key={`${q.question}-${i}`}
            onRadioChange={onClickAnswer}
          />
        ))}
      </div>
      {activeCardIndex < QUESTION_BANK.length - 1 ? (
        <Button
          onClick={onClickNext}
          type='icon'
          title='next card'
          className='nextButton'
        >
          <CircleChevronRight size={36} className='buttonIcon' />
        </Button>
      ) : (
        <Button
          onClick={onClickReset}
          type='icon'
          title='start over'
          className='nextButton'
        >
          <Undo2 size={36} className='buttonIcon' />
        </Button>
      )}
      <></>
    </div>
  );
};
