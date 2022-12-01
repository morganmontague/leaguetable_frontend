function ButtonMaker (props) {
    return <button onClick={props.handleToggle} className={props.className} id="Push">{props.text}</button>

}
export default ButtonMaker