import "./Algorithm.css";

function Algorithm() {
  return (
    <div className="algorithm-container">
      <h2>General Flow of Visualizer</h2>
      <ol>
        <li>Select the size of array.</li>
        <li>Select desired Sorting Algorithm.</li>
        <li>Click on Submit button to visualize sorting.</li>
      </ol>
      <ul>
        <li>
          <strong> Pause Button: </strong>
          You can use this button to pause the sorting at any point and
          understand it.
        </li>
        <li>
          <strong> Reset Button: </strong>
          You can use this button to reset the sorted data to it's default
          format.
        </li>
        <li>
          <strong> Start Button: </strong>
          You can use this button to start sorting the data to again after
          resetting.
        </li>
      </ul>
    </div>
  );
}

export default Algorithm;
