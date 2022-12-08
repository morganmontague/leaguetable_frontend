

function Collapse(props) {
    return (
      <>
        <button
          className="btn btn-small"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#teamInfo" + props.index}
          aria-expanded="false"
          aria-controls={"#teamInfo" + props.index}
          id="drop_down"
        >
          Players
        </button>
        <div className="collapse" id={"teamInfo" + props.index}>
          <div className="card card-body" id="drop_down">
          {props.player.map((player) => 
            <li key={player.id}>
                {player}
            </li>
          )}
          </div>
        </div>
      </>
    );
  }
  
  export default Collapse;
