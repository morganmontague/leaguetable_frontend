import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Header from "./componets/header";
import List from "./componets/list";


const BASEURL = "https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/teams/?format=json";

function App() { 

  const [dogData, setDogData] = useState(null);
  useEffect(() =>{
    axios.get(BASEURL).then((response) => setDogData(response.data));
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Header />
        </div>
        <a
          className="App-link"
          href="https://www.geoguessr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Soccer Tables
        </a>
        <div>
          {/* {data.results[0].team_name} */}
          <List data={dogData} />
        </div>
      </header>
    </div>
  );
}

export default App;
