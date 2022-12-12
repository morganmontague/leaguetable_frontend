import React from 'react';


import { Link } from "react-router-dom"
// import Axios from 'axios'

function Navbar(){
    
    return (
<div className="container navbar_light">
    <div className="d-flex flex-wrap justify-content-center py-3 mb-4">


      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to='/'  className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
          <Link to='/register' className="nav-link">Register</Link>
          </li>
      </ul>
    </div>
  </div>
    )
}

export default Navbar