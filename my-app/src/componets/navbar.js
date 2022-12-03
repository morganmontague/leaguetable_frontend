import React from 'react';
import App from '../App';

import { Link } from "react-router-dom"
// import Axios from 'axios'

function Navbar(){
    
    return (
<div className="container">
    <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">


      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to='/'  className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/team' className="nav-link">Login</Link>
          </li>
          {/* <li className="nav-item">
          <Link to='/info' className="nav-link">More Info</Link>
          </li> */}
      </ul>
    </div>
  </div>
    )
}

export default Navbar