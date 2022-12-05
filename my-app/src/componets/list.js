import React from "react";
import Collapse from "./collapse";

// import Collapse from "./collapse";

function List(props) {
    if(!props.data){
        return
    }


    return (
        <div>
            {props.data.map( (team) => (
                <div key={team.id}> 
                    {team.team_name}
                    <div>
                        <Collapse index={team.id} team={team.players }/>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default List;



