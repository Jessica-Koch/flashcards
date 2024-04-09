import { Color, Question } from '../../assets/types';

import './FlashCard.scss';
import {
  Circle,
  CircleCheckBig,
  Hexagon,
  OctagonAlert,
  Sparkle,
  Star,
  Triangle,
} from 'lucide-react';
import { Radio } from '../Radio/Radio';
import React from 'react';
import { NestedCircles } from '../Circle/NestedCircles';
import { Triangles } from '../Triangles/Triangles';
import { RainbowText } from '../RainbowText/RainbowText';

type FlashCardProps = {
  isActive: boolean;
  isPrevCard: boolean;
  question: Question;
  onRadioChange: (isAnswerCorrect: boolean) => void;
};

export const FlashCard = ({
  isActive,
  isPrevCard,
  onRadioChange,
  question,
}: FlashCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(
    null
  );
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [type, setType] = React.useState<'success' | 'error'>();

  const onCheckAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = +e.target.value;
    setSelectedAnswer(answer);
    setIsFlipped(true);

    if (+answer === question.correctAnswer) {
      setType('success');
      onRadioChange(true);
    } else {
      setType('error');
      onRadioChange(false);
    }
  };
  const onclick = () => setIsFlipped(!isFlipped);
  return (
    <div
      className={`scene ${isActive ? 'slideIn' : ''}  ${isPrevCard ? 'slideOut' : ''} `}
    >
      <div onClick={onclick} className={`flashCard ${isFlipped && 'flipped'}`}>
        <div className='cardFace front borders'>
          <div className='cardContent'>
            <NestedCircles className='bottom' color={Color.PURPLE} />
            <NestedCircles className='right' color={Color.YELLOW} />
            <div className='question'>{question.question}</div>
            <div className='options'>
              {question.options.map((opt, i) => (
                <div key={`${i}-${opt}`}>
                  <Radio
                    checked={selectedAnswer === i}
                    label={opt}
                    onChange={onCheckAnswer}
                    value={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='cardFace back borders'>
          <div className='cardContent backCardContent'>
            <div className={`header ${type}`}>
              <div className='floatingIcons upper'>
                {type === 'error' ? <Triangle /> : <Sparkle />}
                <Hexagon className='iconLarge' />
                {type === 'error' ? <Circle /> : <Star />}
              </div>
              <div className='circle outer'>
                <div className='circle inner'>
                  {type === 'error' ? (
                    <OctagonAlert className='icon' />
                  ) : (
                    <CircleCheckBig className='icon' />
                  )}
                </div>
              </div>
              <div className='floatingIcons lower'>
                <Circle className='iconLarge' />
              </div>
              <Triangles
                className={`cardTriangles ${type === 'error' ? 'downTriangles' : 'upTriangles'}`}
              />
            </div>
            <div className='footer'>
              <div className='results'>
                {type === 'error' ? (
                  `The correct answer was ${question.options[question.correctAnswer]}`
                ) : (
                  <RainbowText className='resultRainbow' text='Congrats!' />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
