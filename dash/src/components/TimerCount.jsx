import React, { useState, useEffect } from 'react';

const TimerCount = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // This function will update the number every 20ms (50 times per second)
    const interval = setInterval(() => {
      setNumber((prevNumber) =>  prevNumber + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Seconds count {number}</h1>
    </div>
  );
};

export default TimerCount;