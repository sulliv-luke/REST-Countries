import React, { useEffect } from 'react';
import './CountryInfo.css'

function CountryInfo(props) {
    const country = props.country
    const isDarkMode = props.isDarkMode
    
    // Handles dark mode
    useEffect(() => {
        const containers = document.querySelectorAll(".country-container");
        containers.forEach((container) => {
            container.classList.toggle("dark-mode", isDarkMode);
          });
      }, [isDarkMode]);
    
    /* Should never really happen but handles any potential errors regarding the table creation
        (i.e. we accidentally try access an index of countries that doesn't exist, then the country
        passed in will be null)

        Served me well in the early days of the project, I think I've fixed all the errors that could lead to this
        But I don't want to take it out just in case

        Anyway, thanks for listening to my TED talk
    */
    if (!country) {
        return (
            <div className='country-container'></div>
        )
    }

    return (
        <div className="country-container">
            <div className='flag-container'>
                <img className = "flag"src={country.flag} alt={"Flag"} />
            </div>
            <div className='infosection'>
                <div className=''><h2>{country.name}</h2></div>
                <p>
                    <strong>Population:</strong> {country.population}
                </p>
                <p>
                    <strong>Region:</strong> {country.region}
                </p>
                <p>
                    <strong>Capital:</strong> {country.capital}
                </p>
            </div>
        </div>
    )
}

export default CountryInfo;
