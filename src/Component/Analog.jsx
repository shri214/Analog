import React, { useEffect, useState } from 'react';
import "./style.css"
export const Analog=()=> {
   
  const [time, setTime] = useState(new Date());
  const [flag, setFlag]=useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegree = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegree = minutes * 6 + seconds * 0.1;
  const secondDegree = seconds * 6;
    
  const hourStyle = {
    transform: `rotate(${hourDegree}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minuteDegree}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${secondDegree}deg)`,
  };

  
  return (
    <div className='container'>
        <div id="clock">
        <div id="hour" style={hourStyle}></div>
        <div id="minute" style={minuteStyle}></div>
        <div id="second" style={secondStyle}></div>
        <div className='dot'></div>
  </div>
  <button id="showTimeButton" onClick={()=>setFlag(!flag)}>Show Time</button>
   {flag && <div className='digital'>{hours} : {minutes} : {seconds}</div>}
    </div>
  )
}
