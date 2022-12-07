

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
            <li>{props.team}</li>
          </div>
        </div>
      </>
    );
  }
  
  export default Collapse;
  