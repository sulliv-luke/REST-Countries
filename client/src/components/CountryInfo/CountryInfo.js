import React, { useEffect, useState } from 'react';
import './CountryInfo.css'

function CountryInfo(props) {
    const country = props.country
    const isDarkMode = props.isDarkMode

    useEffect(() => {
        const containers = document.querySelectorAll(".country-container");
        containers.forEach((container) => {
            container.classList.toggle("dark-mode", isDarkMode);
          });
      }, [isDarkMode]);
    

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
