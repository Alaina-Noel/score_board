import React, {useState} from "react";
// import {Link} from 'react-router-dom' //TODO: add a link to team info
import './GameCard.css'

export const GameCard = ({ awayPhoto, homePhoto, awayTeamName, homeTeamName, gameStatus, sport }) => {
    return(
        <div className='game-card'>
            <div className='game-card-title'>
                <p>{homeMascotName} at {awayMascotName}</p>
                <p> Status: {gameStatus} </p>
                <p> Sport: {sport} </p>
            </div>
            <div className='teamLogos'>
            <img className='away-team-image' src={awayPhoto} alt='away-team-logo'/>
            <img className='home-team-image' src={homePhoto} alt='home-team-logo'/>
            </div>
        </div>
    )
}

export default GameCard;