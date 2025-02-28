import React, { useState, useEffect } from 'react';
import { GaugeComponent } from 'react-gauge-component';

const RPMMockGauge = () => {
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
      <GaugeComponent
      type="radial"
      maxValue={9000} 
  value={number}
  arc={{
    colorArray: ['#FFFFFF'],
    subArcs: [{limit: 7000}],
    padding: 0,
    cornerRadius: 20,
    width: 0.15
  }}
  labels={{
    valueLabel: { formatTextValue: value => value },
    tickLabels: {
      colorArray: ['#FFFFFF'],
      type: "inner",
      ticks: [
        { value: 1000 },
        { value: 2000 },
        { value: 3000 },
        { value: 4000 },
        { value: 5000 },
        { value: 6000 },
        { value: 7000 },
        { value: 8000 },
        { value: 9000 },
      ]
    }}}
      />
    </div>
  );
};

export default RPMMockGauge;