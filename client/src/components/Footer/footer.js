import React, { useEffect, useState } from 'react';
import './footer.css';

function Footer(props) {
    const isDarkMode = props.isDarkMode;

    useEffect(() => {
        const footer = document.querySelectorAll(".footer");
        footer.forEach((footer) => {
            footer.classList.toggle("dark-mode", isDarkMode);
          });
      }, [isDarkMode]);
  return (
    <footer className='footer'>
      Created by <a href="https://sulliv-luke.github.io" target="_blank" rel="noopener noreferrer">Luke Sullivan</a> 2023
    </footer>
  );
}

export default Footer;