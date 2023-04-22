import React, { useEffect, useState } from 'react';
import './Search.css';
import axios from 'axios';
import CountryTable from '../CountryTable/CountryTable';
import Footer from '../Footer/footer';

function Search(props) {
  const [countries, setCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  let isMobile = props.isMobile;

  useEffect(() => {
    // Used to handle switch to dark mode 
    const containers = document.querySelectorAll(".container");
    const buttons = document.getElementsByTagName("button");
    containers.forEach((container) => {
      container.classList.toggle("dark-mode", isDarkMode);
    });
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle('dark-mode', isDarkMode);
    }
  }, [isDarkMode]);

  // Toggles dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handles a change in the input value (the value typed into the search bar)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch data from the backend
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/countries/${inputValue}`);
        const data = response.data;
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    }
    // If there is an input value there, fetch the data corresponding to that value
    if (inputValue) {
      fetchData();
    }
  };
  

  return (
    <div className="container">
      <div className='drk-btn-wrap'>
        <button onClick={toggleDarkMode}>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</button>
      </div>
      <h1>REST Country Search</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name of Country" value={inputValue} onChange={handleInputChange}/>
        <button type="submit">Search</button>
      </form>
      <div className='table-wrap'>
        <CountryTable countries={countries} isDarkMode={isDarkMode} isMobile={isMobile}/>
      </div>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
}

export default Search;