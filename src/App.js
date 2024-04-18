// App.js
import React from 'react';
import './App.css';
import Calculator from './Calculator'; // Import the Calculator component



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator /> {/* Include the Calculator component */}
        <h1>Calculator</h1>
      </header>
    </div>
  );
}

export default App;