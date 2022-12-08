import request from '../services/api.request.js';
import React from 'react'
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/GlobalState.js';
import { Link } from "react-router-dom"
import axios from 'axios'
import NavbarLog from '../componets/navbar.js';
import authHeader from '../services/auth.headers.js';

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

// const submit = () => {
//   axios.post('https://8000-morganmonta-leaguetable-ro14ml096ug.ws-us77.gitpod.io/api/players/', {
// "player_name": player_name,
// "jersey_no": jersey_no,
// "injured": injured,
// "age": age,
// "nationality_id": nationailty_id,
// "position_id": position_id
//   })
// }
async function sendData() {
  let playerObject = {
    "player_name": player_name,
    "jersey_no": jersey_no,
    "injured": injured,
    "age": age,
    "nationality_id": nationailty_id,
    "position_id": position_id
  };
  let options = {
  url: "players/",
  method: "POST",
  data: {
      ...playerObject
  }
  };
  await request(options);
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
    <select onChange={injuredInput} className=" form-select form-select-sm bg-light" >
  <option defaultValue={1}>Currently Injured</option>
  <option value="true">True</option>
  <option value="false">False</option>
</select>
      {/* <input onChange={injuredInput} type="text" placeholder="true or false"/> */}
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={ageInput} type="number" placeholder="Age"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
    <select onChange={nationInput} className=" form-select form-select-sm bg-light" >
  <option defaultValue={1}>Pick the Nationality</option>
  <option value="1">Dutch</option>
  <option value="2">Ecuadorian</option>
  <option value="3">Qatarian</option>
  <option value="4">Senegalese</option>
</select>
      {/* <input onChange={nationInput} type="number" placeholder="Nationality"/> */}
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
    <select onChange={positionInput} className=" form-select form-select-sm bg-light" >
  <option defaultValue={1}>Pick the Position</option>
  <option value="1">Forward</option>
  <option value="2">Midfield</option>
  <option value="3">Defender</option>
  <option value="4">Goal Keeper</option>
</select>
      {/* <input onChange={positionInput} type="number" placeholder="Position"/> */}
    </div>





    <div className="col-12 d-flex justify-content-center">
      <Link to='/players'>
        <button onClick={sendData} type="button" className='btn btn-primary'>Click to Register</button>
      </Link>
    </div>
  </div>
    </div>
    )
}