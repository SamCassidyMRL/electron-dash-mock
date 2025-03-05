import React from 'react';
import { GaugeComponent } from 'react-gauge-component';

const BasicGauge = ({value, min, max, softWarning, hardWarning, label}) => {
  return (
    <div style={{width: 150}}> 
      <GaugeComponent
      style={{marginRight: '-50px', marginLeft: '-50px', marginTop: '-30px' }}
      labels={{ 
        tickLabels: {hideMinMax: true}, 
        valueLabel: { formatTextValue: value => { return 100} }, 
      }}
      minValue={min ?? 0}
      maxValue={max ?? 100}
  arc={{
    // gradient: true,
    nbSubArcs: 0,
    cornerRadius: 100,
    emptyColor: '#8C7995',
    subArcs: [
      
      {
        limit: softWarning ?? hardWarning,
        color: '#ffffff',
        showTick: false
      },
      ...[softWarning ? {
        limit:  hardWarning,
        color: '#ea7c28',
        showTick: false
      } : {}],
      ...[softWarning || hardWarning ? {
        limit: max,
        color: '#EA4228',
        showTick: false
      }: {}],
    ]
  }}
  value={value}

/>
<div color='white' style={{textAlign:'center', color:'white', marginTop: '-20px' }}>{label}</div>
    </div>
  );
};

export default BasicGauge;