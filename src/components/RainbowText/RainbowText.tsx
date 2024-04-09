import './RainbowText.scss';

type RainbowTextProps = {
  text: string;
  className?: string;
};

export const RainbowText = ({ className, text }: RainbowTextProps) => {
  const createRainbow = text.split('').map((ch, i) => (
    <span key={`${ch}-${i}`} className='rainbowLetter'>
      {ch}
    </span>
  ));

  return <div className={`rainbowText ${className}`}>{createRainbow}</div>;
};
