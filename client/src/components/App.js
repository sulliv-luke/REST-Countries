import React, { useEffect, useState } from 'react';
import Search from './Search/Search.js'

function App() {
  // Get the current screen width to determine if user is on mobile or not
  const [width, setWidth] = useState(window.innerWidth);

  // Tracks any change in window size that occurs
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  // We'll consider it a mobile device if the width <= 768 
  const isMobile = width <= 768;
  return (
    <div id='app-wrap'>
      <Search isMobile={isMobile}/>
    </div>
  );
}

export default App;
