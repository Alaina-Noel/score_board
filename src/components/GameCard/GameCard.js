import React from "react";
import './GameCard.css'
import noPhoto from './noPhoto.jpg'

const GameCard = ({ awayPhoto, homePhoto, awayTeamName, homeTeamName, gameStatus, sportName, awayScore, homeScore, awayTeamInfoLink, homeTeamInfoLink }) => {
    return(
        <div className='game-card'>
            <div className='game-card-title'>
                <div className="sport-name"> {sportName} </div> 
                <div className='team-names'>
                    <a href={awayTeamInfoLink} className='team-link'>{awayTeamName}</a> at <a href={homeTeamInfoLink} className='team-link'>{homeTeamName}</a> 
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