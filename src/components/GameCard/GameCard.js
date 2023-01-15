import React from "react";
// import {Link} from 'react-router-dom' //TODO: add a link to team info
import './GameCard.css'
import noPhoto from './noPhoto.jpg'


const GameCard = ({ awayPhoto, homePhoto, awayTeamName, homeTeamName, gameStatus, sportName, awayScore, homeScore }) => {
    return(
        <div className='game-card'>
            <div className='game-card-title'>
                <div className="sport-name"> {sportName} </div> 
                <div className='team-names'>
                    <div> {awayTeamName} at {homeTeamName}</div> 
                    <div>  {awayScore} - {homeScore} </div> 
                </div>
                </div>
            <div className='team-logos-container'>
                <img className='away-team-image' src={awayPhoto ? awayPhoto : noPhoto} alt='away-team-logo'/>
                <img className='home-team-image' src={homePhoto ? homePhoto : noPhoto} alt='home-team-logo'/>
            </div>
            <div className="game-status"> {gameStatus} </div> 
        </div>
    )
}

export default GameCard;