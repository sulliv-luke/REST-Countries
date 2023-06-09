import React, { useEffect, useState } from 'react';
import './CountryTable.css';
import CountryInfo from '../CountryInfo/CountryInfo';

function CountryTable(props) {
    const countries = props.countries;
    const isDarkMode = props.isDarkMode;
    const isMobile = props.isMobile;

    useEffect(() => {
        const tables  = document.querySelectorAll(".tab");
        const loaders = document.querySelectorAll(".loader");
        tables.forEach((table) => {
            table.classList.toggle("dark-mode", isDarkMode);
          });
          loaders.forEach((loader) => {
            loader.classList.toggle("dark-mode", isDarkMode);
          });
    
      }, [isDarkMode]);

    if (countries == null) {
        return(
        <table className='tab'>
            <div className="loader"></div>
        </table>
        );
    }

    let numCols = 1;
    if (!isMobile) {
        if (countries.length >= 4) {
            numCols = 4;
        } else {
            numCols = countries.length;
        }
    }

    let numRows = Math.floor(countries.length / numCols);
    if (countries.length % numCols !== 0) {
        numRows++;
    }

    let rows = [];
    for (let i = 0; i < numRows; i++) {
        const cells = [];
        let k = numCols;
        if (numCols === 4) {
            k = countries.length - (numCols * i);
            if (k > numCols) {
                k = numCols;
            }
        }
        console.log(k);
        for (let j = 0; j < k; j++) {
            let index = j + (i*numCols);
            cells.push(<td key={j}><CountryInfo country={countries[index]} isDarkMode={isDarkMode} /></td>);
          }
          rows.push(<tr key={i}>{cells}</tr>);
    }

    return (
        <table className='tab'>
          <tbody>
            {rows}
          </tbody>
        </table>
      );

}

export default CountryTable;