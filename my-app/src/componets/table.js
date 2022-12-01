import Row from "./row"


function Table (props) {
    if(!props.data){
        return
    }
    return (
<>
<table classname="table table_hover table-bordered" id="drop_down">
    <thead>
        <tr>
        <th scope="col">Pos</th>
        <th scope="col">Team</th>
        <th scope="col">Pld</th>
        <th scope="col">W</th>
        <th scope="col">D</th>
        <th scope="col">L</th>
        <th scope="col">GF</th>
        <th scope="col">GA</th>
        <th scope="col">GD</th>
        <th scope="col">Pts</th>
        </tr>
    </thead>
    <tbody>
    {props.data.map( (team) => (
                <div key={team.id}> 
                    <Row team = {team.team_name} position = {team.rank}/>
                </div>
            ))}
    </tbody>
    </table>
</>
    ) 
}
    



export default Table




