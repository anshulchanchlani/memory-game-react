import React from 'react';
import './index.less'
const StartGame = ({startGame,signalStartGame})=>{
    return(
        <div className="start-timer">
        <div>{!startGame?<h3>Please start a new game.</h3>:null}</div>
        {!startGame && <button onClick={(e)=>signalStartGame()}>Start Game</button>}
        </div>
    )
}

export default StartGame;