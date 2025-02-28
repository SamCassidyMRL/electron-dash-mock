import React, { useState, useEffect } from 'react';
// import { Gauge } from 'react-circular-gauge'
import { GaugeComponent } from 'react-gauge-component';

const MockGauge = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // This function will update the number every 20ms (50 times per second)
    const interval = setInterval(() => {
      setNumber((prevNumber) => { 
        if (prevNumber > 6000) {
          return 1000
        } else {
          return prevNumber + 100
        }
      });
    }, 20); // 1000ms / 50 = 20ms interval

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{width: 300, height: 300}}>
      
    </div>
  );
};

export default MockGauge;