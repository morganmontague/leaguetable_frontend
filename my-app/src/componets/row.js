
function Row (props) {
    return (
        <>
        <tr>
            <td>{props.position}</td>
            <td>{props.team}</td>
            <td>{props.games_played}</td>
            <td>{props.wins}</td>
            <td>{props.ties}</td>
            <td>{props.losses}</td>
            <td>{props.goals_scored}</td>
            <td>{props.goals_lost}</td>
            <td>{props.goal_dif}</td>
            <td>{props.points}</td>
        </tr>
        </>
    )
}

export default Row 

// colspan="2"