import React from 'react';
import './GameCardsContainer.css';

const GameCardsContainer = ({ games }) => {
  const sportName = (sportId) => {
    const allSports = {
      1: "Basketball",
      2: "Football",
      3: "Baseball",
      4: "Softball",
      5: "Lacrosse",
      6: "Soccer",
      7: "Volleyball",
      8: "Field Hockey",
      9: "Ice Hockey",
      10: "Water Polo",
      11: "Cross Country",
      12: "Golf",
      13: "Tennis"
    };
    console.log(allSports[9])
    return allSports[sportId];
  };

  if(!games){
    return <div>Type a date and search for a game</div>
  }
  return (
    <div className="game-cards-container">
      {games.map((game) => {
        if (game.game_teams) {
          return (
            <div className="game-card" key={game.game_teams[0].id}>
              <p> away photo {game.game_teams[0].team.image}</p>
              <p> home photo {game.game_teams[1].team.image}</p>
              <p>game team id: {game.game_teams[0].id}</p>
              <p> away team name: {game.game_teams[0].team.name}</p>
              <p> home team name: {game.game_teams[1].team.name}</p>
              <p>{game.status}</p>
              <p> sport: {sportName(game.sport_id)}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default GameCardsContainer;