import './Card.scss';
import {
  LuAlertCircle,
  LuAlertOctagon,
  LuCheckCircle,
  LuCircle,
  LuStar,
  LuTriangle,
} from 'react-icons/lu';
import { Button } from '../../../src/components/Button/Button';

type CardProps = {
  children: React.ReactNode;
  isFlipped: boolean;
  isVisible: boolean;
  onClick: () => void;
  type: 'error' | 'success';
};

export const Card = ({
  children,
  isFlipped,
  isVisible,
  onClick,
  type,
}: CardProps) => {
  return (
    <div
      className={`card ${type} ${isVisible ? 'show' : 'hide'} ${isFlipped && 'flipped'}`}
    >
      <div className='front'>{children}</div>
      <div className='back'>
        <div className={`header ${type}`}>
          <div className='floatingIcons upper'>
            <LuTriangle className='iconLarge' />
            {type === 'error' ? <LuAlertCircle /> : <LuStar />}
          </div>
          <div className='circle outer'>
            <div className='circle  vinner'>
              {type === 'error' ? (
                <LuAlertOctagon className='icon' />
              ) : (
                <LuCheckCircle className='icon' />
              )}
            </div>
          </div>
          <div className='floatingIcons lower'>
            <LuCircle className='iconLarge' />
            <LuTriangle />
          </div>
        </div>
        <div className='footer'>
          <h1>{type === 'error' ? 'Try Again!' : 'Congrats!'}</h1>
          <Button type={type} onClick={onClick}>
            {type === 'error' ? 'Try again' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  );
};
