import React from "react";
// import {Link} from 'react-router-dom' //TODO: add a link to team info
import './GameCard.css'

const GameCard = ({ awayPhoto, homePhoto, awayTeamName, homeTeamName, gameStatus, sportName }) => {
    return(
        <div className='game-card'>
            <div className='game-card-title'>
                <p>{awayTeamName} at {homeTeamName}</p>
                <p> Status: {gameStatus} </p>
                <p> Sport: {sportName} </p>
            </div>
            <div className='teamLogos'>
            <img className='away-team-image' src={awayPhoto} alt='away-team-logo'/>
            <img className='home-team-image' src={homePhoto} alt='home-team-logo'/>
            </div>
        </div>
    )
}

export default GameCard;