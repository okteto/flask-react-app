import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(0);
  const url = '/datetime' 
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setCurrentDateTime(data.datetime);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
<h3>
  The date and time is {currentDateTime}
 
</h3>
<p> Testing okteto</p>
      </header>
        
    </div>
  );
}

export default App;
