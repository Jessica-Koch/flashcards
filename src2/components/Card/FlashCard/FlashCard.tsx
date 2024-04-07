import { Radio } from '../../Radio/Radio';
import { Question } from '../../types';
import { Card } from '../Card';
import './FlashCard.scss';
type FlashCardProps = {
  activeQuestion: number;
  index: number;
  isFlipped: boolean;
  question: Question;
  onChange: (i: number) => void;
  selectedAnswer: number | null;
};
export const FlashCard = ({
  activeQuestion,
  index,
  isFlipped,
  onChange,
  question,
  selectedAnswer,
}: FlashCardProps) => {
  const isVisible = activeQuestion === index;

  return (
    <Card
      isVisible={isVisible}
      onClick={() => console.log('hi')}
      type='success'
      isFlipped={isFlipped}
    >
      <div className='question'>
        <div>{question.question}</div>
      </div>
      <div className='option-container'>
        <div className='options'>
          {question.options?.map((choice: string, i: number) => {
            const onSelectionChange = () => onChange(i);

            return (
              <Radio
                key={`radio-${i}-${choice}`}
                label={choice}
                choiceNumber={i + 1}
                onChange={onSelectionChange}
                checked={selectedAnswer === i}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
};
