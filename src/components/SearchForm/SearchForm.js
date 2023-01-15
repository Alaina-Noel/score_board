import React, { useState } from "react";
import './SearchForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = ({ setGames, setErrorMessage }) => {
  const [searchValue, setSearchValue] = useState("");
  const [domError, setDomError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      const date = searchValue.toISOString().slice(0, 10);
      queryGames(date);
      clearInputs();
    } else {
      setDomError("Please select a date");
    }
  };

  const queryGames = (searchValue) => {
    const endpoint = `https://api.scorebooklive.com/v2/games?date=${searchValue}&priority_order=true&status_id=2&status_id=3`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setGames(data.data))
      .catch(error => {
        setErrorMessage(error.message);
      });
  }
  const clearInputs = () => { 
    setSearchValue("");
    setDomError("");
  };

  return (
    <div className="search-area">
      <h3>Select a date to find a game</h3>
      <DatePicker
        selected={searchValue}
        onChange={date => setSearchValue(date)}
        className="search-input"
      />
      <button className="game-search-btn" onClick={(event) => handleSubmit(event)}>Search</button>
      {domError && <h4 className="error-message">{domError}</h4>}
    </div>
  );
};

export default SearchForm;