import NavbarLog from "../componets/navbarloged";
import Logo from "../componets/logo";
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import request from "../services/api.request";


import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


function Logged() { 

    let [data, setData] = useState([])
    let [state, dispatch] = useGlobalState();

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



    return (
      <div className="App">
        
        <header className="App-header">
          
          <div>
            <NavbarLog />
          </div>
            <div className="nav-items" id="link_page">
                <Link to ='/info' className='nav-link' aria-current="page">
                    Learn More
                </Link>
            </div>
            <br></br>
            <Outlet />
        </header>
        <br></br>
        <Logo />
      </div>
    );
  }
  
  export default Logged;
  