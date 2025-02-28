import React, { useState, useEffect } from 'react';
import { GaugeComponent } from 'react-gauge-component';

const EngineTempMockGauge = () => {
  const [number, setNumber] = useState(50);

  useEffect(() => {
    // This function will update the number every 20ms (50 times per second)
    const interval = setInterval(() => {
      setNumber((prevNumber) => { 
        if (prevNumber > 100) {
          return 50
        } else {
          return prevNumber + 2
        }
      });
    }, 20); // 1000ms / 50 = 20ms interval

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      <GaugeComponent
      labels={{ tickLabels: {hideMinMax: true}}}
  arc={{
    // gradient: true,
    nbSubArcs: 0,
    cornerRadius: 100,
    emptyColor: 'white',
    subArcs: [
      
      {
        limit: 80,
        color: '#5BE12C',
        showTick: false
      },
      {
        limit: 100,
        color: '#EA4228',
        showTick: false
      },
    ]
  }}
  value={number}
/>
    </div>
  );
};

export default EngineTempMockGauge;