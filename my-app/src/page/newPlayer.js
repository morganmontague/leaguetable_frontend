// "player_name": "Kalidou Koulibaly",
// "jersey_no": 3,
// "injured": false,
// "age": 32,
// "nationality_id": 4,
// "position_id": 3

import React from 'react'
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/GlobalState.js';
import { Link } from "react-router-dom"
import axios from 'axios'
import NavbarLog from '../componets/navbar.js';

export default function Player_Register () {

    
  const [player_name, setPlayername] = useState("")
  const [jersey_no, setJersey] = useState("")
  const [injured, setInjured] = useState("")
  const [age, setAge] = useState("")
  const [nationailty_id, setNation] = useState("")
  const [position_id, setPosition] = useState("")



const playerNameInput = (e) => {
  setPlayername(e.target.value)
}
const jerseyInput = (e) => {
  setJersey(e.target.value)
}
const injuredInput = (e) => {
    setInjured(e.target.value)
}
const ageInput = (e) =>
  setAge(e.target.value)

  const nationInput = (e) =>
  setNation(e.target.value)

  const positionInput = (e) =>
  setPosition(e.target.value)

const submit = () => {
  axios.post('https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/players/', {
"player_name": player_name,
"jersey_no": jersey_no,
"injured": injured,
"age": age,
"nationality_id": nationailty_id,
"position_id": position_id
  })
}

  return (
    <div>
      <NavbarLog/>
    <div className='row d-flex justify-content-center align-items-center'>
      <h2 className='pt-3 pb-3 text-center'>Register Player Here</h2>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={playerNameInput} type="text" placeholder='Name'/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={jerseyInput} type="number" placeholder="Jersey Number"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={injuredInput} type="text" placeholder="true or false"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={ageInput} type="number" placeholder="Age"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={nationInput} type="number" placeholder="Nationality"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={positionInput} type="number" placeholder="Position"/>
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