import React from 'react';
import './App.css';
import Planets from "./containers/Planets/Planets";

const App = () => {
  return (
      <div className="App">
        <h2>SW API Planets:</h2>
        <Planets />
      </div>
  );
};

export default App;
