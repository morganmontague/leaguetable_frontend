
function Row (props) {
    return (
        <>
        <tr>
            {/* <th scope="row">1</th> */}
            <td>{props.position}</td>
            <td colspan="2">{props.team}</td>
            {/* <td>{Played}</td>
            <td>{Wins}</td>
            <td>{Draws}</td>
            <td>{Loses}</td>
            <td>{Goals_scored}</td>
            <td>{Goals_conceded}r</td>
            <td>{Goal_dif}</td>
            <td>{Points}</td> */}
        </tr>
        </>
    )
}

export default Row 

