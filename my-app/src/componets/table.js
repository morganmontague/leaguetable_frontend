import Row from "./row"


function Table (props) {
    
    if(!props.data){
        return
    }
    let sorty = props.data.sort(function(a, b){return b.points - a.points});
    function indexId(){
        for (let i = 0; i < sorty.length; i++) {
                const blah = sorty[i];
                // console.log(blah)
    } 
    
}
indexId()
    return (
        <>
<table className="table table_hover table_bordered" id="drop_down">
    <thead>
        <tr>
        <th scope="col"><abbr title="Position">Pos</abbr></th>
        <th scope="col">Team</th>
        <th scope="col"><abbr title="Games Played">Pld</abbr></th>
        <th scope="col"><abbr title="Games Won">W</abbr></th>
        <th scope="col"><abbr title="Games Drawn">D</abbr></th>
        <th scope="col"><abbr title="Games Lost">L</abbr></th>
        <th scope="col"><abbr title="Goals Scored">GF</abbr></th>
        <th scope="col"><abbr title="Goals Conceded">GA</abbr></th>
        <th scope="col"><abbr title="Goal Difference">GD</abbr></th>
        <th scope="col"><abbr title="Points">Pts</abbr></th>
        </tr>
    </thead>
    <tbody>
    {
        

        sorty.map( (team) => (
                
                    <Row key={team.id}
                    position = {team.rank}
                    team = {team.team_name} 
                    games_played = {team.games_played} 
                    wins={team.wins} 
                    ties={team.ties} 
                    losses={team.losses}
                    goals_scored={team.goals_scored}
                    points={team.points}
                    />
                    
                
            ))}
    </tbody>
    </table>
</>
    ) 
}
    



export default Table




