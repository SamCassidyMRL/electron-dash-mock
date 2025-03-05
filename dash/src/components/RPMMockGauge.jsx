import React, { useState, useEffect } from 'react';
import { GaugeComponent } from 'react-gauge-component';

const RPMMockGauge = ({rpm}) => {


  return (
    <div style={{backgroundColor: '#0000000'}}>
      <GaugeComponent
      style={{marginRight: -40, marginTop: -80, marginLeft:-40, width: 500, height: 250}}
      type="radial"
      maxValue={9000} 
  value={rpm }
  arc={{
    colorArray: ['#FFFFFF', '#DA2128', '#DA2128'],
    subArcs: [{limit:7000}, {limit: 8900}, {limit: 9000, color: '#DA2128'}],
    padding: -20,
    gradient: true,
    cornerRadius: 20,
    width: 0.15
  }}
  labels={{
    valueLabel: { formatTextValue: value => value },
    tickLabels: {
      colorArray: ['#FFFFFF', ],
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