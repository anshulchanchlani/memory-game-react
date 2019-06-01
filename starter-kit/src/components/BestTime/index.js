import React,{useState} from 'react';
import './index.less'
const BestTime = ({finalTime})=>{
    const [prevBest,setBestTime] = useState(window.localStorage.getItem("best-time-schmemory") || 0)
    return(
        <div className="best-time"><span>Time to beat: <strong>{prevBest}</strong> seconds </span></div>
    )
}

export default BestTime;