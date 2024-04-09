import { Color } from '../../assets/types';
import './NestedCircles.scss';

type NestedCircleProps = {
  color: Color;
  className?: string;
};

export const NestedCircles = ({ color, className }: NestedCircleProps) => {
  return (
    <div
      className={`nestedCircles ${color}ConcentricCircles ${className}`}
    ></div>
  );
};
