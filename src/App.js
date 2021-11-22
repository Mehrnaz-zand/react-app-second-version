import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
<div className="container">
<Weather defaultCity="London" />
    <footer>
      This project was created by {" "} 
      <a href="https://www.linkedin.com/in/mehrnaz-zand" target="_blank" rel="noreferrer">Mehrnaz Zand </a>
       and is {" "}
       <a href="https://github.com/Mehrnaz-zand/react-weather-app-second-version" target="_blank" rel="noreferrer">
         open-sourced on Github
      </a>
      
    </footer>
    </div>
    </div>
  );
}

export default App;
