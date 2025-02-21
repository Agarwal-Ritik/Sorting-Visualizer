import './inputArea.css';
import '../button.css';

function InputArea() {
  return (
    <div id="inputArea">
      <p>
        Input Array Size -&nbsp;
        <input type="number" className="input-box" min={10} max={100}/>
      </p>
      <p>
        Select sorting algorithm -&nbsp;
        <input list="Sortings" name="sortingAlgorthm" />
        <datalist id="Sortings">
          <option value="Bubble Sort" />
          <option value="Insertion Sort" />
          <option value="Selection Sort" />
          <option value="Merge Sort" />
          <option value="Quick Sort" />
          <option value="Selection Sort" />
        </datalist>
      </p>
      <p id="submitContainer">
        <button>Submit</button>
      </p>
    </div>
  );
}

export default InputArea;
