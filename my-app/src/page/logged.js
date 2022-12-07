import NavbarLog from "../componets/navbarloged";
import Table from "../componets/table";
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import request from "../services/api.request";
import Header from "../componets/header";
import Table_page from "./table_page";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


function Logged() { 

    let [data, setData] = useState([])
    let [state, dispatch] = useGlobalState();
    let navigate = useNavigate();

    console.log(state)

    useEffect(() => {
    async function testing(){
    let options = {
    url: '/customusers',
    method: 'GET', 
    }
    let resp = await request(options) 
    setData(resp.data)
    if (!data) {
        return;
      }
    }
    testing()
}, []
    )
console.log(data)



    function TableSwapFunction () {
      <Table_page  />
      navigate('/table')
    }
    return (
      <div className="App">
        
        <header className="App-header">
          
          <div>
            <Header />
            <NavbarLog />
          </div>
          <h3>
          </h3>
            <Link to ='/info' className='nav-item'>
              Learn More About Soccer Tables
            </Link>
                <button className=" btn btn-alert" onClick={TableSwapFunction}>
                  Table View
                </button>
            <br></br>
            <Outlet />
        </header>
      </div>
    );
  }
  
  export default Logged;
  