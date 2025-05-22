import { useState } from 'react';
import { useInterval } from './useInterval';

export const useClock = () => {
  const [today, setToday] = useState(new Date());
  useInterval(() => setToday(new Date())); //렌더링마다 다른 함수객체를 넘기고 있는것.
  return today;
};
