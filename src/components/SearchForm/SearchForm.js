import React, { useState } from "react";
import './SearchForm.css';

const SearchForm = ({ queryGames }) => {
  const [searchValue, setSearchValue] = useState("");
  const [domError, setDomError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      queryGames(searchValue);
      clearInputs();
    } else {
      setDomError("Please enter a date");
    }
  };

  const clearInputs = () => { 
    setSearchValue("");
    setDomError("");
  };

  return (
    <div className="search-area">
      <h3>Type in a date in the form 2023-01-25 to find a game</h3>
      <input
        type="text"
        placeholder="Search for a List of Games by Date"
        name="gme"
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="game-search-btn" onClick={(event) => handleSubmit(event)}>Search</button>
      {domError && <h4 className="error-message">{domError}</h4>}
    </div>
  );
};

export default SearchForm;