import React,{Fragment,useState} from 'react';
import GamePage from '../GamePage'
import Timer from '../../components/Timer'
import BestTime from '../../components/BestTime'
import StartGame from '../../components/StartGame'
import './index.less'

/* This is the starting page where the User would land once he launches the app.

It renders various components such as GamePage which will render the actual game area, Timer which will keep track of the time spent for each game, Best Time which will display the shortest time that the user has spent in finishing a game(based on localstorage) and a Start game component which will host a button to begin the game and timer.

Most of the components and function names are self-explanatory. 
*/
const HomePage = () =>{
    const [finalTime,setFinalTime] = useState(0)
    const [stopTimer,signalStopTimer] = useState(false)
    const getTime = (time=0) =>{
       setFinalTime(time);
    } 
    const [startGame,signalStartGame] = useState(false);
    const [stopGame,signalStopGame] = useState(false)

    const resetGame = ()=>{
        let prevBest = window.localStorage.getItem("best-time-schmemory");
        console.log(prevBest,finalTime)
        if(prevBest>finalTime || !prevBest){
            window.localStorage.setItem("best-time-schmemory",finalTime);
        }
        signalStopTimer(false)
        signalStartGame(false);
        signalStopGame(true);
    }

    const initGame=()=>{
        signalStartGame(!startGame)
        signalStopGame(startGame)
    }

    return(
        <Fragment >
            <section className="flex-container">
                <div>{startGame && <BestTime newBestTime={finalTime}/>}</div>
                <div><StartGame startGame={startGame} signalStartGame={initGame}/></div>
                <div>{startGame && <Timer sendTime={getTime} stopTimer={stopTimer}/>}</div>
               
            </section>
          {stopGame && <div className="final-time"><h3>Your final time was: {finalTime-1} seconds</h3></div>}
          {startGame && <GamePage resetGame={resetGame}/>}
          
        </Fragment>
    )
}


export default HomePage;