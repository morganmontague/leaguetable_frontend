import React from 'react'
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/GlobalState.js';
import { Link } from "react-router-dom"
import axios from 'axios'
import Navbar from '../componets/navbar.js';

export default function Register () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [first_name, setfirst_name] = useState("")
  const [last_name, setlast_name] = useState("")

const userNameInput = (e) => {
  setUsername(e.target.value)
}
const passwordInput = (e) => {
  setPassword(e.target.value)
}
const emailInput = (e) => {
    setEmail(e.target.value)
}
const first_nameInput = (e) =>
  setfirst_name(e.target.value)

  const last_nameInput = (e) =>
  setlast_name(e.target.value)

const submit = () => {
  axios.post('https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/user/create/', {
      "username": username,
      "password": password,
      "email": email,
      "first_name": first_name,
      "last_name": last_name
  })
}

  return (
    <div>
      <Navbar/>
    <div className='row d-flex justify-content-center align-items-center'>
      <h2 className='pt-3 pb-3 text-center'>Register Here</h2>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={userNameInput} type="text" placeholder='Username'/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={emailInput} type="text" placeholder="E-mail"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={first_nameInput} type="text" placeholder="First Name"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={last_nameInput} type="text" placeholder="Last Name"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={passwordInput} type="password" placeholder="Password"/>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <Link to='/login'>
        <button onClick={submit} type="button" className='btn btn-primary'>Click to Register</button>
      </Link>
    </div>
  </div>
    </div>
    )
}