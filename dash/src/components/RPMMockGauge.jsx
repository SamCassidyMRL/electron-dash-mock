import React, { useEffect, useState } from 'react';
import { GaugeComponent } from 'react-gauge-component';
const UPDATE_TILL_RERENDER_NUMBER = 2

const RPMMockGauge = ({rpm}) => {
  const [numberDisplayValue, setNumberDisplayValue] = useState(rpm)
  const [renderCount, setRenderCount] = useState(0)

    const [canRerender, setCanRerender] = useState(true)
    const [currentValue, setCurrentValue] = useState(rpm)
  
    useEffect(() => {
      const canRerenderCallback = setInterval(() => {
        setCanRerender(true);
      }, 100);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(canRerenderCallback);
    }, []);

  return (
    <div style={{backgroundColor: '#0000000'}}>
      <GaugeComponent
      style={{marginRight: -40, marginTop: -80, marginLeft:-40, width: 500, height: 250}}
      type="radial"
      maxValue={9000} 
  value={rpm }
  arc={{
    colorArray: ['#FFFFFF', '#DA2128', '#7a0000'],
    subArcs: [{limit:6000}, {limit: 8000}, {limit: 9000, color: '#DA2128'}],
    padding: 0,
    gradient: true,
    cornerRadius: 20,
    width: 0.15
  }}
  labels={{
    valueLabel: { formatTextValue: value => { 
      if (canRerender) {
        setCurrentValue(Math.floor(value))
        setCanRerender(false)
        return Math.floor(value)
      } else {
        return currentValue
      }
    }},
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