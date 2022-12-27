import request from '../services/api.request.js';
import React from 'react'
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/GlobalState.js';
import { Link } from "react-router-dom"
import axios from 'axios'
import NavbarLog from '../componets/navbarloged.js';;


export default function PlayerTeamPick (props) {

  const [ state, dispatch ] = useGlobalState([]);

  const [team, setTeam] = useState("")
  const [data, setData] = useState("")


  let one = 1
  let two = 2
  if(one = two){
    console.log(yes)
  }
const teamInput = (e) => {
  setTeam(e.target.value)
}


useEffect(() => {
    async function callAPI(){
    let options = {
    url: 'players/',
    method: 'GET',
    params:{
      player_name : state.postData
    }
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

    let current_player = data[0]


let key_date = 0


async function editTeam(){
    let options = {
        url: "team_players/",
        method: "POST",
        data: {
          "player": current_player.id,
          "team": team
        },
    };
    await request(options);
}



  return (
    <div>
      <NavbarLog />
    <div className='row d-flex justify-content-center align-items-center'>
      <h2 className='pt-3 pb-3 text-center'>Please Pick a Team to Support</h2>
      {data.map((team)=> (
                <div key={key_date++}className='text-center'>
                    {team.team_name}
                </div>
      ))}
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
    <select onChange={teamInput} className=" form-select form-select-sm bg-light" >
  <option defaultValue={1}>Nationality?</option>
  <option value="1">Qatarian</option>
  <option value="2">Senegalese</option>
  <option value="3">Ecuadorian</option>
  <option value="4">Dutch</option>
</select>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <Link to='/home'>
        <button onClick={editTeam} type="button" className='btn btn-primary'>Click to Register</button>
      </Link>
    </div>
  </div>
    )
}