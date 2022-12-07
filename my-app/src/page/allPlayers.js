import NavbarLog from "../componets/navbarloged";
import Table from "../componets/table";

import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import request from "../services/api.request";


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

    


return (
    <>
    <NavbarLog />
    <ul>{data.map((player) => 
        <li key={player.id}>
            Player Name: {player.player_name}
            {/* <li>
                Nationality: {player.nationailty_id}
            </li> */}
        </li>
    )}
    </ul>
    </>
)
}

export default AllPlayers

