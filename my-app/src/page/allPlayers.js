import NavbarLog from "../componets/navbarloged";
import Table from "../componets/table";

import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import request from "../services/api.request";
import Player_Register from "./newPlayer";
import { Link } from "react-router-dom";


    function AllPlayers(){


    let [data, setData] = useState([])
    let [state, dispatch] = useGlobalState();
    let navigate = useNavigate();


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
    function function_sort(){
    data.sort(function(a, b){return b.age - a.age});
}


data.sort(function(a, b){return b.age - a.age});

return (
    <>
    <NavbarLog />
    <div className=" container player_page ">
    <div className="nav-items" id="link_page">
                <Link to ='/new_player' className='nav-link' aria-current="page">
                    Add Players
                </Link>
            </div>
            <br></br>
            <div className="overflow-visible over">
                    <ul>{data.map((player) => 
        <li key={player.id}>
            Player Name: {player.player_name} and he is {player.age} years old.
        </li>
    )}
    </ul>
            </div>

    </div>
    </>
)
}

export default AllPlayers

