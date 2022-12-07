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
console.log(data)

    let idd = state.currentUser.user_id
    console.log(idd)

return (
    <>
    <NavbarLog />
    <div>
            {data.map( (team) => (
                <div key={team.id}> 
                    {team.team_name}
                    <div>
                        <Collapse index={team.id} team={team.players }/>
                    </div>
                </div>
            ))}
        </div>
    </>
)
}

export default MyTeam