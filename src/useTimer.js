import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [Time, setTime] = useState(ini);
  // "Your code here";

  const isStart = "Your code here";
  const active = "Your code here";
  const refInterval = useRef(null);

  const startTimer = () => {
    // "Your code here";
    refInterval.current = setInterval(() => {
      setTime((timer) => timer + 1)
    }, 1000)
    active.current.disabled = true;
  };
  const stopTimer = () => {
    // "Your code here";
    clearInterval(refInterval.current)
  };
  const resetTimer = () => {
    // "Your code here";
    clearInterval(refInterval.current)
    active.current.disabled = false;
    setTime(0);
  };

  return { Time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
