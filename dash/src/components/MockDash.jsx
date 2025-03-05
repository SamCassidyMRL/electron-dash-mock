import React, { useEffect, useState } from 'react';
import RPMMockGauge from './RPMMockGauge.jsx';
import TimerCount from './TimerCount.jsx';
import BasicGauge from './BasicGauge.jsx';
import { MOCK_ECU_DATA } from './mockECUData.js';
import SpeedoMockGauge from './SpeedoMockGauge.jsx';
import { GAUGE_CONFIG } from './GaugeConfig.js';


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
        <SpeedoMockGauge speed={ecuData.DrivenWheelSpeed}/>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Space items evenly across the page
        alignItems: 'center', // Vertically center items
        padding: '10px'
    }}>
        <BasicGauge value={ecuData.OilPressure} {...GAUGE_CONFIG.OilPressure}/>
        <BasicGauge value={ecuData.OilTemperature} {...GAUGE_CONFIG.OilTemperature} />
        <BasicGauge value={ecuData.ECT}  {...GAUGE_CONFIG.ECT} />
        <BasicGauge value={ecuData.Gear} {...GAUGE_CONFIG.Gear}/>
        <BasicGauge value={ecuData.IAT} {...GAUGE_CONFIG.IAT}/>
        <BasicGauge value={ecuData.MAP} {...GAUGE_CONFIG.MAP}/>
      </div>
      <TimerCount />
    </div>
  );
};

export default MockDash;