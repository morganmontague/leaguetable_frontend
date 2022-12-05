import './custom.scss';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router, Switch,} from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"
import "./index.css";
import { useNavigate } from 'react-router-dom';

import Logo from "./componets/logo";
import List from "./componets/list";
import Table from "./componets/table";
import TableExplained from "./componets/tableExplained";
import Navbar from "./componets/navbar";
import Table_page from './page/table_page';


const BASEURL = "https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/teams/";

function App() { 

  let navigate = useNavigate()

  const [data, setData] = useState(null);
  useEffect(() =>{
    axios.get(BASEURL).then((response) =>{ setData(response.data)
    });
    
  }, []);

  function TableSwapFunction () {
    <Table_page  data ={data}/>
    navigate('/table')
  }
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
              <button className=" btn btn-alert" onClick={TableSwapFunction}>
                Table View
              </button>
          <List data={data} />
          <Table data={data}/>
          <br></br>
          <Outlet />
      </header>
    </div>
  );
}

export default App;
