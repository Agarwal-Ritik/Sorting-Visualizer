import "./InputArea.css";

function InputArea() {
  return (
    <div>
      <label>
        Input Array Size -&nbsp;
        <input
          name="ArraySize"
          type="number"
          className="input-box"
          required
          min={10}
          max={100}
        />
      </label>
      <br />
      <label>
        Select sorting algorithm -&nbsp;
        <input list="Sortings" name="SortingAlgorithm" required />
        <datalist id="Sortings">
          <option value="Bubble Sort" />
          <option value="Insertion Sort" />
          <option value="Selection Sort" />
          <option value="Merge Sort" />
          <option value="Quick Sort" />
          <option value="Selection Sort" />
        </datalist>
      </label>
    </div>
  );
}

export default InputArea;
