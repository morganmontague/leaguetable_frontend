function Collapse(props) {
    return (
      <>
        <button
          className="btn btn-small"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#teamOnfo" + props.index}
          aria-expanded="false"
          aria-controls={"#teamOnfo" + props.index}
          id="drop_down"
        >
          Players
        </button>
  
        <div className="collapse" id={"teamOnfo" + props.index}>
          <div className="card card-body" id="drop_down">
            {props.team}
          </div>
        </div>
      </>
    );
  }
  
  export default Collapse;
  