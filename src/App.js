import './App.css';
import React, {useState} from "react";
import SearchForm from './components/SearchForm/SearchForm';

const App = () =>  {
  const [games, setGames] = useState([]);
  const queryGames = (searchValue) => {
    const endpoint = `https://api.scorebooklive.com/v2/games?date=2022-09-13&priority_order=true`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setGames(data.data))
      // .catch(error => {
      //   // Handle any errors
      // }); //TODO handle this error
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        <div className="body">
        <SearchForm queryGames={queryGames} />
        {/* <Games games={games} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
