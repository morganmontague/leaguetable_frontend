import NavbarLog from "../componets/navbarloged";
import Logo from "../componets/logo";
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import request from "../services/api.request";
import Header from "../componets/header";

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

let useID =state.currentUser.user_id


    return (
      <div className="App">
        
        <header className="App-header">
          
          <div>
            <NavbarLog />
          </div>
          <h3>
            {useID}
          </h3>

            <div className="nav-items" id="link_page">
                <Link to ='/info' className='nav-link' aria-current="page">
                    Learn More About Soccer Tables
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
  