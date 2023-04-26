import { useEffect, useState } from 'react';

export const useTimer = (endTime: Date) => {
  const [seconds, setSeconds] = useState((endTime.getTime() - Date.now()) / 1000);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return {
    seconds,
  };
};
