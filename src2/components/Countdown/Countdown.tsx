import { useEffect, useState } from "react";

export const Countdown = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Decrease the countdown value every second
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (countdown === 0) {
      // setTimeout to reset countdown when it reaches 0
      setTimeout(() => {
        setCountdown(5);
      }, 1000);
    }
  }, [countdown]);

  return (
    <div>
      <h2>Countdown: {countdown}</h2>
    </div>
  );
};
