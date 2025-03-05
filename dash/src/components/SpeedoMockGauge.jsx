import React, { useState, useEffect } from 'react';
import { GaugeComponent } from 'react-gauge-component';

const SpeedoMockGauge = ({speed}) => {

  return (
    <div style={{backgroundColor: '#0000000'}}>
      <GaugeComponent
      style={{marginRight: -40, marginTop: -100, marginLeft:-40, width: 500, height: 250}}
      type="radial"
      maxValue={200} 
  value={speed}
  arc={{
    colorArray: ['#FFFFFF', '#DA2128'],
    subArcs: [{limit:160}, {limit: 180}],
    padding: 0,
    cornerRadius: 5,
    width: 0.15
  }}
  labels={{
    valueLabel: { formatTextValue: value => { return Math.floor(value) } },
    tickLabels: {
      colorArray0: ['#FFFFFF'],
      type: "inner",
      ticks: [
        { value: 20 },
        { value: 40 },
        { value: 60 },
        { value: 80 },
        { value: 100 },
        { value: 120 },
        { value: 140 },
        { value: 160 },
        { value: 180 },
        { value: 200 },
      ]
    }}}
      />
    </div>
  );
};

export default SpeedoMockGauge;