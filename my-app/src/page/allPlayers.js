import NavbarLog from "../componets/navbarloged";
import Table from "../componets/table";

import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import request from "../services/api.request";
import Player_Register from "./newPlayer";
import { Link } from "react-router-dom";


    function AllPlayers(props){


    let [data, setData] = useState([])
    let [state, dispatch] = useGlobalState();
    let navigate = useNavigate();

    console.log(state)

    useEffect(() => {
    async function callAPI(){
    let options = {
    url: 'players/',
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
console.log(data)
    function function_sort(){
    data.sort(function(a, b){return b.age - a.age});
}


data.sort(function(a, b){return b.age - a.age});

return (
    <>
    <div className=" container" id="player_page">
    <NavbarLog />
    <div className="nav-items" id="link_page">
                <Link to ='/new_player' className='nav-link' aria-current="page">
                    Add Players
                </Link>
            </div>
    <ul>{data.map((player) => 
        <li key={player.id}>
            Player Name: {player.player_name} and he is {player.age} years old.
        </li>
    )}
    </ul>
    </div>

    </>
)
}

export default AllPlayers

