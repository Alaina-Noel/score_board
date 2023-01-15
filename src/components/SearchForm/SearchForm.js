import React, { useState } from "react";
import './SearchForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GameCardsContainer from '../GameCardsContainer/GameCardsContainer.js'

const SearchForm = ({ setGames, setErrorMessage }) => {
  const [searchedDate, setSearchedDate] = useState("");
  const [domError, setDomError] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchedDate) {
      const date = searchedDate.toISOString().slice(0, 10);
      queryGames(date);
      clearInputs();
    } else {
      setDomError("Please select a date");
    }
  };

  const queryGames = (searchedDate) => {
    const endpoint = `https://api.scorebooklive.com/v2/games?date=${searchedDate}&priority_order=true`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setGames(data.data))
      .catch(error => {
        setErrorMessage(error.message);
      });
    setCurrentDate(new Date());
  }
  const clearInputs = () => { 
    setSearchedDate("");
    setCurrentDate(new Date());
    setDomError("");
  };

  return (
    <div className="search-area">
      <h3>Select a date to find a game</h3>
      <DatePicker
        selected={searchedDate}
        onChange={date => setSearchedDate(date)}
        className="search-input"
      />
      <GameCardsContainer 
        searchedDate={searchedDate} 
        currentDate={currentDate} 
      />
      <button className="game-search-btn" onClick={(event) => handleSubmit(event)}>Search</button>
      {domError && <h4 className="error-message">{domError}</h4>}
    </div>
  );
};

export default SearchForm;