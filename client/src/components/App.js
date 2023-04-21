import React, { useEffect, useState } from 'react';
import Search from './Search/Search.js'

function App() {
  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;
  return (
    <div id='app-wrap'>
      <Search isMobile={isMobile}/>
    </div>
  );
}

export default App;
