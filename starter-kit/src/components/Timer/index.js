import React,{useState,useEffect} from 'react';
import './index.less'
const Timer = ({startGame,sendTime,stopTimer})=>{
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
          sendTime(counter+2)
          setCounter(counter+1);
        }, 1000);
        return () => {
          
          clearTimeout(timeout);
        }
      }, [counter]);
    
    return(
        <section className="timer">
             <span>Time Elapsed: <strong>{counter}</strong> seconds</span>
        </section>
    )
}

export default Timer;
