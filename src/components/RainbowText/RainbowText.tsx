import './RainbowText.scss';

type RainbowTextProps = {
  text: string;
  className?: string;
};

export const RainbowText = ({ className, text }: RainbowTextProps) => {
  const createRainbow = text
    .split('')
    .map((ch) => <span className='rainbowLetter'>{ch}</span>);

  return <div className={`rainbowText ${className}`}>{createRainbow}</div>;
};
