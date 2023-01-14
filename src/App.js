import './App.css';
import React, {useState} from "react";
import SearchForm from './components/SearchForm/SearchForm';
import GameCardsContainer from './components/GameCardsContainer/GameCardsContainer';

const App = () =>  {
  const [games, setGames] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <SearchForm setGames={setGames} setErrorMessage={setErrorMessage} />
        <GameCardsContainer games={games} />
        </div>
      </header>
    </div>
  );
}


export default App;
