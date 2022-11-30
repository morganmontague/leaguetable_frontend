import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";


function App() {

  const [data, setData] = useState({});

  
  const baseURL = "https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/teams/";
  
  useEffect(() => {
    axios.get(baseURL)
        .then((resp) => setData(resp.data));
  }, [])

  console.log(data)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
