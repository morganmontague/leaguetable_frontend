import request from '../services/api.request.js';
import React from 'react'
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/GlobalState.js';
import { Link } from "react-router-dom"
import axios from 'axios'
import NavbarLog from '../componets/navbar.js';
import authHeader from '../services/auth.headers.js';

export default function Team_Pick () {

  const [ state, dispatch ] = useGlobalState([]);

  const [team, setTeam] = useState("")
  const [jersey_no, setJersey] = useState("")
  const [data, setData] = useState("")




const teamInput = (e) => {
  setTeam(e.target.value)
}


useEffect(() => {
    async function callAPI(){
    let options = {
    url: 'teams/',
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
    if (!data) {
        return;
    }
console.log(data)


let key_date = Date.now()


async function editTeam(){
    let options = {
        url: "teams/" + team + '/',
        method: "PUT",
        data: {
            "user_id": state.currentUser.user_id,
        },
    };
    await request(options);
}



  return (
    <div>
      <NavbarLog/>
    <div className='row d-flex justify-content-center align-items-center'>
      <h2 className='pt-3 pb-3 text-center'>Please Pick a Team to Support</h2>
      {data.map((team)=> (
                <div key={key_date}className='text-center'>
                    {team.team_name}
                </div>
      ))}

    <div className="col-12 pb-4 d-flex justify-content-center">
    <select onChange={teamInput} className=" form-select form-select-sm bg-light" >
  <option defaultValue={1}>Pick the Nationality</option>
  <option value="1">Qatar</option>
  <option value="2">Senagal</option>
  <option value="3">Ecudor</option>
  <option value="4">Netherlands</option>
</select>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <Link to='/home'>
        <button onClick={editTeam} type="button" className='btn btn-primary'>Click to Register</button>
      </Link>
    </div>
  </div>
    </div>
    )
}