import './custom.scss';
import './CSS/App.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router, Switch,} from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom"
import "./CSS/index.css";
import { useNavigate } from 'react-router-dom';

import Logo from "./componets/logo";
import Header from './componets/header';
import Navbar from "./componets/navbar";
import Table_page from './page/table_page';


// const TEAMURL = "https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/teams/";

function App() { 

  let navigate = useNavigate()

  // const [data, setData] = useState(null);
  // useEffect(() =>{
  //   axios.get(TEAMURL).then((response) =>{ setData(response.data)
  //   });
    
  // }, []);

  function TableSwapFunction () {
    <Table_page  />
    navigate('/table')
  }
  return (
    <div className="App">
      
      <header className="App-header">
        
        <div>
          <Header />
          <Navbar />
          <Logo />
        </div>
          <Outlet />
      </header>
    </div>
  );
}

export default App;
