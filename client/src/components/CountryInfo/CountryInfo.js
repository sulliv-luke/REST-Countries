import React, { useEffect, useState } from 'react';
import './CountryInfo.css'

function CountryInfo(props) {
    const {country} = props;

    if (!country) {
        return (null);
    }

    console.log(country);

    return (
        <div className="container">
            <div className=''><h2>{country.name}</h2></div>
            <img className = "flag"src={country.flag} alt={"Flag"} />
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
    )
}

export default CountryInfo;
