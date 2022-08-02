import React, { useState } from 'react'

const StopwatchComp = () => {
    const[Hours,setHours] = useState('00')
    const[Mins,setMins] = useState('00')
    const[S,setS] = useState('00')
    const[Mil,setMil] = useState('00')
    const [int,setInt] = useState();
    let ms = 0;
    let secs = 0;
    let mins = 0;
    let hours = 0;
    const startBut = () =>{
         setInt(setInterval(() => {
                ms++;
                (ms<10)?setMil('0'+ms):setMil(ms);
                if(ms > 99){
                    ms = '00';
                    secs++;
                    (secs<10)?setS('0'+secs):setS(secs);
                    if(secs>59){
                        secs = '00';
                        mins++;
                        (mins<10)?setMins('0'+mins):setMins(mins);
                    }
                    if(mins>59){
                        mins = '00';
                        hours++;
                        (hours<10)?setHours('0'+hours):setHours(hours);
                    }
                }
            }, 1))
    }

    const stopBut = () =>{
        clearInterval(int);
        // console.log(Interval)
    }

    const resetBut = () =>{
        // clearInterval(int);
        setHours(0+'0');
        setMins(0+'0');
        setS(0+'0');
        setMil(0+'0');
    }
    
  return (
    <div>
        <div className="d-flex fs-1">
            <div>{Hours}</div>:
            <div>{Mins}</div>:
            <div>{S}</div>:
            <div>{Mil}</div> 
        </div>
            <br/>
        <div>
            <button className="btn btn-success start mx-1" onClick={startBut}>START</button> 
            <button className="btn btn-success stop mx-1" onClick={stopBut}>STOP</button>
            <button className="btn btn-success reset mx-1" onClick={resetBut}>RESET</button>
        </div>
    </div>
  )
}

export default StopwatchComp