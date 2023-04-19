import React, { useEffect, useState } from 'react';
import './CountryInfo.css'

function CountryInfo(props) {
    const country = props.country
    const isDarkMode = props.isDarkMode

    if(isDarkMode) {
        const containers = document.querySelectorAll(".country-container");
        containers.forEach((container) => {
            container.classList.toggle("dark-mode", isDarkMode);
          });
    } else {
        const containers = document.querySelectorAll(".country-container");
        containers.forEach((container) => {
            container.classList.toggle("dark-mode", isDarkMode);
          });
    }

    if (!country) {
        return (null);
    }

    console.log(country);

    return (
        <div className="country-container">
            <img className = "flag"src={country.flag} alt={"Flag"} />
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
