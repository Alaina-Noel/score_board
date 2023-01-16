import React from "react";
import './GameCardsContainer.css';
import GameCard from '../GameCard/GameCard.js';

const GameCardsContainer = ({ games, isPastGame }) => {
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
    return allSports[sportId];
  };

  const gameStatus = (statusId, isPastGame) => {
    const allStatus = {
      1: "Upcoming",
      2: "In Progress",
      3: "Final"
    }
    if (isPastGame) {
      return allStatus[3];//The data was showing some past games as status_id of 1. This handles that error.
    } else {
    return allStatus[statusId];
    }
  };
  
  if(!games){
    return <div></div>
  }
  return (
    <div className="game-cards-container">
      {games.map((game) => {
        if (game.game_teams) {
          return (
            <div className="game-card-data-container" key={game.game_teams[0].id}>
              <GameCard
                key={game.game_teams[0].id}
                id={game.game_teams[0].id}
                awayPhoto={game.game_teams[0].team.image}
                homePhoto={game.game_teams[1].team.image}
                awayTeamName={game.game_teams[0].team.name}
                homeTeamName={game.game_teams[1].team.name}
                gameStatus={gameStatus(game.status_id, isPastGame)}
                sportName={sportName(game.sport_id)}
                awayScore={game.game_teams[0].score}
                homeScore={game.game_teams[1].score}
                awayTeamInfoLink={game.game_teams[0].team.link.webapp}
                homeTeamInfoLink={game.game_teams[0].team.link.webapp}
               />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default GameCardsContainer;