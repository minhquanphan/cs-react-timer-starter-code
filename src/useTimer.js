import { useState, useRef } from "react";
import "./index.css";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  // "Your code here";

  const isStart = useRef(null);
  const active = useRef(null);
  const refInterval = useRef(null);

  const startTimer = () => {
    // "Your code here";
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    isStart.current.disabled = true;
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

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
