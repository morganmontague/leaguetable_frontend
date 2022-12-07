import React from 'react';
import App from '../App';
import authService from '../services/auth.service';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
// import Axios from 'axios'

function NavbarLog(){
    
    let navigate = useNavigate();
    function Logout() {
        navigate("/");
        authService.logout();
        window.location.reload();
      }
    return (
<div className="container">
    <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">


      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to='/home'  className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/players'  className="nav-link" aria-current="page">All Players</Link>
        </li>
        <li className="nav-item">
          <Link to='/myteam'  className="nav-link" aria-current="page">My Team</Link>
        </li>
        <li className="nav-item">
          <Link to='/'  className="nav-link" aria-current="page" onClick={Logout}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
    )
}

export default NavbarLog