import React from 'react';
import RPMMockGauge from './RPMMockGauge.jsx';
import TimerCount from './TimerCount.jsx';
import EngineTempMockGauge from './EngineTempMockGauge.jsx';


const MockDash = () => {
  return (
    <div style={{backgroundColor: '#3F1951', height: '95vh'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Space items evenly across the page
        alignItems: 'center', // Vertically center items
        padding: '10px'
    }}>
        <RPMMockGauge />
        <EngineTempMockGauge />
        <EngineTempMockGauge />
        <EngineTempMockGauge />
        <EngineTempMockGauge />

      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Space items evenly across the page
        alignItems: 'center', // Vertically center items
        padding: '10px'
    }}>
        <RPMMockGauge />
        <EngineTempMockGauge />
        <EngineTempMockGauge />
        <EngineTempMockGauge />
        <EngineTempMockGauge />
        
      </div>
      <TimerCount />
    </div>
  );
};

export default MockDash;