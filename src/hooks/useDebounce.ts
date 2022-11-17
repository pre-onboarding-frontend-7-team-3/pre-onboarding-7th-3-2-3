import { useEffect, useState } from 'react';

const useDebounce = (
  callback: Function,
  value: string,
  delay: number = 600
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);
};

export default useDebounce;
