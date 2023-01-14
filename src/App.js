import './App.css';
import React, {useState} from "react";
import SearchForm from './components/SearchForm/SearchForm';

const App = () =>  {
  const [games, setGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const queryGames = (searchValue) => {
    const endpoint = `https://api.scorebooklive.com/v2/games?date=${searchValue}&priority_order=true`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setGames(data.data))
      .catch(error => {
        setErrorMessage(error.message);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        <div className="body">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <SearchForm queryGames={queryGames} />
        {console.log(games)}
        {/* <Games games={games} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
