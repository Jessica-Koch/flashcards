import { useState } from 'react';
import { FlashCard } from '../Card/FlashCard/FlashCard';
import { QUESTION_BANK } from '../data';
import { Question } from '../types';
import { LuChevronRight } from 'react-icons/lu';
import { Button } from '../../../src/components/Button/Button';
import { Radio } from '../Radio/Radio';

export const Quiz = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const flipCard = () => setIsFlipped(!isFlipped);

  const restartQuiz = () => {
    setScore(0);
    setActiveQuestion(0);
    setIsFlipped(false);
  };
  const onClickNext = () => {
    flipCard();
    // setActiveQuestion((prev) => prev + 1);
  };

  const handleAnswerClick = (selectedAnswer: number) => {
    setSelectedAnswerIndex(selectedAnswer);
    const currentQuestion = QUESTION_BANK[activeQuestion];
    if ((selectedAnswer = currentQuestion.correctAnswer)) {
      setScore(score + 1);
    }
    setIsFlipped(true);
  };

  const quiz = QUESTION_BANK.map((question: Question, i: number) => {
    const onAnswerChange = (i: number) => {
      setSelectedAnswerIndex(i);

      if (i === question.correctAnswer) {
        setScore(score + 1);
      }
    };

    return activeQuestion < QUESTION_BANK.length ? (
      <FlashCard
        key={`question-${i}`}
        index={i}
        activeQuestion={activeQuestion}
        selectedAnswer={selectedAnswerIndex}
        question={question}
        onChange={onAnswerChange}
        isFlipped={i === activeQuestion && isFlipped}
      />
    ) : (
      <div>
        <h2>Quiz Complete!</h2>
        <p>Your score: {score}</p>
        <Button
          onClick={restartQuiz}
          type={'success'}
          children={undefined}
        ></Button>
      </div>
    );
  });

  return (
    <div className='quiz'>
      <div className='quiz-questions'>{quiz}</div>;
      <Button onClick={onClickNext} type='icon'>
        <LuChevronRight />
      </Button>
    </div>
  );
};
