import React, { useEffect, useState } from 'react';

const NumberGauge = ({value, min, max, softWarning, hardWarning, label}) => {

  return (
    <div style={{width: 140, height: 108, borderRadius: 16, backgroundColor:"rgba(0, 0, 0, 0.25)" }}  > 
      <div color='white' style={{fontFamily: 'system-ui', fontWeight: '900', textAlign:'center', color:'white', fontSize: 70 }}>{value}</div>
<div color='white' style={{fontFamily: 'system-ui', fontWeight: '900', textAlign:'center', color:'white', }}>{label}</div>
    </div>
  );
};

export default NumberGauge;