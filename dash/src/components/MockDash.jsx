import React, { useEffect, useState } from 'react';
import RPMMockGauge from './RPMMockGauge.jsx';
import TimerCount from './TimerCount.jsx';
import BasicGauge from './BasicGauge.jsx';
import { MOCK_ECU_DATA } from './mockECUData.js';
import SpeedoMockGauge from './SpeedoMockGauge.jsx';


const MockDash = () => {
    const [ecuDataIndex, setEcuDataIndex] = useState(1)
  
    useEffect(() => {
      // This function will update the number every 20ms (50 times per second)
      const interval = setInterval(() => {
        setEcuDataIndex((prevNumber) => { 
          if (prevNumber > 9000) {
            return 0
          } else {
            return prevNumber + 1
          }
        }); 
      }, 20); // 1000ms / 50 = 20ms interval
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }, []);
    // setEcuData(MOCK_ECU_DATA[ecuDataIndex]) 


    const ecuData = MOCK_ECU_DATA[ecuDataIndex]

  return (
    <div style={{backgroundColor: '#3F1951', height: '95vh'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Space items evenly across the page
        alignItems: 'center', // Vertically center items
        padding: '10px',
        height:340,
    }}>
        <RPMMockGauge rpm={ecuData.EngineSpeed}/>
        <SpeedoMockGauge rpm={ecuData.DrivenWheelSpeed}/>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Space items evenly across the page
        alignItems: 'center', // Vertically center items
        padding: '10px'
    }}>
        <BasicGauge value={ecuData.OilPressure} min={0} max={700} warning={500} error={600} label="Oil Pressure"/>
        <BasicGauge value={ecuData.OilPressure} min={0} max={700} warning={500} error={600} label="Oil Pressure"/>
        <BasicGauge value={ecuData.OilPressure} min={0} max={700} warning={500} error={600} label="Oil Pressure"/>
        <BasicGauge value={ecuData.OilPressure} min={0} max={700} warning={500} error={600} label="Oil Pressure"/>
        <BasicGauge value={ecuData.OilPressure} min={0} max={700} warning={500} error={600} label="Oil Pressure"/>
        <BasicGauge value={ecuData.OilPressure} min={0} max={700} warning={500} error={600} label="Oil Pressure"/>
      </div>
      <TimerCount />
    </div>
  );
};

export default MockDash;