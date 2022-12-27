import NavbarLog from "../componets/navbarloged";
import React, { useState, useEffect } from "react";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import Collapse from "../componets/collapse";



    function MyTeam(){

    let [state, dispatch] = useGlobalState();
    let [data, setData] = useState([])


    useEffect(() => {
    async function callAPI(){
    let options = {
    url: 'getUserTeam/',
    method: 'GET',
    }
    let resp = await request(options) 
    setData(resp.data)

    }
    callAPI()
}, []
    )

let games = data.games
if (!games) {
    return;
  }

let players = data.players

if(!players){
    return;
}

let key_date = 0


return (
    <>
    <NavbarLog />
    <div className="container">
        <h1 className="team_names">{data.team_name}</h1>
        <br></br>
        <div className="row">
            <div className="col-6 player_page">
                <h3 className="headers mb-4 border-bottom">
                    Results
                </h3>
            </div>
            <div className="col-6 player_page">
                <h3 className="headers mb-4 border-bottom">
                    Players
                </h3>
            </div>
        <div className="col-6">
        <ul className="player_page">
                {games.map((game)=> (
                <li key={key_date++}>
                    The team has played a recent game and the results was {game}
                </li>
                )
                )}
        </ul>
        </div>
        <div className="col-6">
            <ul className="player_page">
                {players.map((player)=> (
                <li key={key_date++}>
                    {player}
                </li>
                )
                )}
            </ul>
        </div>
        </div>
            
    </div>
    </>
)
}

export default MyTeam


