import React, { useState, useEffect } from 'react';

const Gauge = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // This function will update the number every 20ms (50 times per second)
    const interval = setInterval(() => {
      setNumber((prevNumber) => { 
        if (prevNumber > 50) {
          return 0 
        } else {
          return prevNumber + 1
        }
      });
    }, 20); // 1000ms / 50 = 20ms interval

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default Gauge;