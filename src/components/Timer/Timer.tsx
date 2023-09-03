import { useState, useEffect } from "react";

const Timer = (): JSX.Element => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);
    setTime(inputValue >= 0 ? inputValue : 0);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      const interval = setInterval(() => {
        if (time <= 0) {
          clearInterval(interval);
          setIsActive(false);
        } else {
          setTime(time - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, isPaused, time]);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <input
          type="number"
          placeholder="Enter time (seconds)"
          value={time}
          onChange={handleInputChange}
        />
        {!isPaused && <button onClick={handleStart}>Start</button>}
      </div>
      <div>
        {isActive && (
          <button onClick={handlePause}>{isPaused ? "Resume" : "Pause"}</button>
        )}
      </div>
      <div>
        <p>Time Remaining: {time} seconds</p>
      </div>
    </div>
  );
};

export default Timer;
