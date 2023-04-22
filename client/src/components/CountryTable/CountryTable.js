import React, { useEffect } from 'react';
import './CountryTable.css';
import CountryInfo from '../CountryInfo/CountryInfo';

function CountryTable(props) {
    const countries = props.countries;
    const isDarkMode = props.isDarkMode;
    const isMobile = props.isMobile;

    useEffect(() => {
        // Used to handle switch to dark mode
        const tables  = document.querySelectorAll(".tab");
        const loaders = document.querySelectorAll(".loader");
        tables.forEach((table) => {
            table.classList.toggle("dark-mode", isDarkMode);
          });
          loaders.forEach((loader) => {
            loader.classList.toggle("dark-mode", isDarkMode);
          });
    
      }, [isDarkMode]);

    // If there is no results, just display a loader for the moment
    if (countries == null) {
        return(
        <table className='tab'>
            <div className="loader"></div>
        </table>
        );
    }

    // On mobile the number of columns will be 1 due to space constraints
    let numCols = 1;
    if (!isMobile) {
        if (countries.length >= 4) {
            // 4 columns if there are 4 or more results to display
            numCols = 4;
        } else {
            // If there is between 1 and 3 results to display, then that's our number of columns we need
            numCols = countries.length;
        }
    }

    // number of rows is the number of results divided by the number of columns, without a remainder
    let numRows = Math.floor(countries.length / numCols);
    if (countries.length % numCols !== 0) {
        // If the number of columns didn't divide evenly into the number of results, then we need an extra row
        numRows++;
    }

    let rows = [];
    for (let i = 0; i < numRows; i++) {
        const cells = [];
        let k = numCols;
        if (numCols === 4) {
            // k is the he number of countries that will be displayed in this row
            k = countries.length - (numCols * i);
            if (k > 4) {
                k = numCols;
            }
        }
        console.log(k);
        for (let j = 0; j < k; j++) {
            // The index of the next country to be displayed
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