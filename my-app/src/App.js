import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router, Switch,} from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"
import "./index.css";
import Logo from "./componets/logo";
import List from "./componets/list";
import Table from "./componets/table";
import TableExplained from "./componets/tableExplained";
import Navbar from "./componets/navbar";


const BASEURL = "https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/teams/";

function App() { 

  const [data, setData] = useState(null);
  useEffect(() =>{
    axios.get(BASEURL).then((response) =>{ setData(response.data)
    });
    
  }, []);


  return (
    <div className="App">
      
      <header className="App-header">
        
        <div>
          <Navbar />
          <Logo />
        </div>
          <Link to ='/info' className='nav-item'>
            Learn More About Soccer Tables
          </Link>
            <link to='/table'>
              <button>
                Table View
              </button>
            </link>
          <List data={data} />
          <br></br>
          <Outlet />
      </header>
    </div>
  );
}

export default App;
