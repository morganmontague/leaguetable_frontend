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





// function List(props) {

//     setTimeout(() => { {
//         // const place = props.page;
//         const placeHolder = (props.items
//         //   (item) => item.team_name === "Qatar"
//         );
//         const listItems = placeHolder.map((item) => (
//           <div

//             key={item.id}
//             className="col-10 col-md-5 col-xl-3 card m-2"
//           >
//             {item.team_name}
    
//             <br></br>
//           </div>
//         )); 
//         return (
//           <>
//             <div id="card">
//               {/* <h1 id="title">{place}</h1> */}
//               <div className="row justify-content-center">{listItems}</div>
//             </div>
//           </>
//         );
//       }; }, 10000)