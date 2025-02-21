import './graphArea.css';
import '../button.css';

function GraphArea(){
    return(
        <div id="graphArea">
            <div id="graph"></div>
            <div id="graphButtons">
              <button id="startButton">Start</button>
              <button id="pauseButton">Pause</button>
              <button id="resetButton">Reset</button>
            </div>
        </div>
    )
}

export default GraphArea;