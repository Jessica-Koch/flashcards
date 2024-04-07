import React from 'react';
import './Button.scss';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  type: 'success' | 'error' | 'icon';
  disabled?: boolean;
  title: string;
  children: React.ReactNode; // Add the children prop
};

export const Button = ({
  title,
  onClick,
  className,
  disabled,
  type,
  children,
}: ButtonProps) => {
  const [animate, setAnimate] = React.useState(0);

  const instanceRef = React.useRef({ timer: 0 });

  React.useEffect(() => {
    return () => {
      clearTimeout(instanceRef.current.timer);
    };
  }, []);

  const onBtnClick = () => {
    clearTimeout(instanceRef.current.timer);
    setAnimate(1);
    onClick();
    instanceRef.current.timer = setTimeout(() => {
      setAnimate(0);
    }, 1000);
  };

  return (
    <div className={`bubbly ${animate ? 'animate' : ''} ${className} `}>
      <button
        title={title}
        className={`button ${type} borderOutlineOut `}
        onClick={onBtnClick}
      >
        {children}
      </button>
    </div>
  );
};
