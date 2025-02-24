import './InputArea.css'
function DisplayArea(props){
    return(
        <div>
            <h1>{props.SortingName}</h1>
            <p id="random-array">Array Elements - {props.GeneratedArray}</p>
        </div>
    );
}

export default DisplayArea;