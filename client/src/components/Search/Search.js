import React, { useEffect, useState } from 'react';
import './Search.css';
import axios from 'axios';
import CountryInfo from '../CountryInfo/CountryInfo';

function Search() {
  const [country, setCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const containers = document.querySelectorAll(".container");
    const buttons = document.getElementsByTagName("button");
    containers.forEach((container) => {
      container.classList.toggle("dark-mode", isDarkMode);
    });
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle('dark-mode', isDarkMode);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The user wants to search for the country: ${inputValue}`);
    // TODO: send the country name to the backend to retrieve the data
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/countries/${inputValue}`);
        const data = response.data;
        setCountry(data[0]);
        console.log(country);
      } catch (error) {
        console.error(error);
      }
    }

    if (inputValue) {
      fetchData();
    }
  };
  

  return (
    <div className="container">
      <div>
        <button onClick={toggleDarkMode}>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</button>
      </div>
      <h1>REST Country Search</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name of Country" value={inputValue} onChange={handleInputChange}/>
        <button type="submit">Search</button>
      </form>
      <CountryInfo country={country} isDarkMode={isDarkMode}/>
    </div>
  );
}

export default Search;