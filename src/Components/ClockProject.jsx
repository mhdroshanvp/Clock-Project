import React from 'react'
import Clock from 'react-clock'
import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';


function ClockProject() {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(()=>{
            setValue(new Date())
        },1000);
    
        return () => {
          clearInterval(interval);
        };
    }, []);

      return(
        <>
          <Clock value={value} />
        </>
      ) 

}

export default ClockProject