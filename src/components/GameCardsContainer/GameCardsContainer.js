import React from 'react';
import './GameCardsContainer.css';

const GameCardsContainer = ({ games }) => {
  if(!games){
    return <div>Type a date and search for a game</div>
  }
  return (
    <div className="game-cards-container">
      {games.map((game) => {
        if (game.game_teams) {
          return (
            <div className="game-card" key={game.id}>
              <p>{game.game_teams[0].team.name}</p>
              <p>{game.game_teams[1].team.name}</p>
              <p>{game.status}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default GameCardsContainer;