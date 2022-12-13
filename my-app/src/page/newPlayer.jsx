import request from '../services/api.request.js';
import React from 'react'
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/GlobalState.js';
import { Link } from "react-router-dom"
import axios from 'axios'
import NavbarLog from '../componets/navbarloged.js';




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

  let [data, setData] = useState([])


useEffect(() => {
  async function callAPI(){
  let options = {
    url: 'team_players/',
  method: 'GET', 
}
  let resp = await request(options) 
  setData(resp.data)
  if (!data) {
      return;
    }
  }
  callAPI()
}, []
  )
  let [state, dispatch] = useGlobalState();
  
async function sendData() {
  let playerObject = {
    "player_name": player_name,
    "jersey_no": jersey_no,
    "injured": injured,
    "age": age,
    "nationality_id": nationailty_id,
    "position_id": position_id
  };await dispatch({
    postData:player_name
  })
  setPlayername(playerObject)
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
    <div className='container'>
        <NavbarLog/>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-5'>
    <div className='row d-flex justify-content-center align-items-center'>
      <h2 className='pt-3 pb-3 text-center'>Register Player Here</h2>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={playerNameInput} type="text" placeholder='Name'/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={jerseyInput} type="number" placeholder="Jersey Number"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
    <select onChange={injuredInput} className=" form-select form-select-sm bg-light new_width" >
  <option defaultValue={1}>Injured?</option>
  <option value="true">True</option>
  <option value="false">False</option>
</select>
      {/* <input onChange={injuredInput} type="text" placeholder="true or false"/> */}
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={ageInput} type="number" placeholder="Age"/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
    <select onChange={positionInput} className=" form-select form-select-sm bg-light new_width" >
  <option defaultValue={1}>Position?</option>
  <option value="1">Forward</option>
  <option value="2">Midfield</option>
  <option value="3">Defender</option>
  <option value="4">Goal Keeper</option>
</select>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <Link to='/player_team' player_info={playerNameInput} >
        <button onClick={sendData} type="button" className='btn btn-primary'>Click to Register</button>
      </Link>
    </div>
  </div>
    </div>
  </div>
    </div>
      

    )
}