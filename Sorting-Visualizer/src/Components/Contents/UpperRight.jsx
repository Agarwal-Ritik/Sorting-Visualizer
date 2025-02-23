import "./inputArea.css";
import "../button.css";
import React, { useState } from "react";
import DisplayArea from "./DisplayArea";
import InputArea from "./InputArea";
import {generateArray} from './RandomArray.js';
import {selectAlgo} from './AlgoMenu.js';
import {selectData} from './ImageMenu.js';
// import BubbleSort from "Sorting-Visualizer/src/SortingAlgorithms/BubbleSort.js";
// import CountingSort from "Sorting-Visualizer/src/SortingAlgorithms/CountingSort.js";
// import SelectionSort from "Sorting-Visualizer/src/SortingAlgorithms/SelectionSort.js";
// import InsertionSort from "Sorting-Visualizer/src/SortingAlgorithms/InsertionSort.js";
// import QuickSort from "Sorting-Visualizer/src/SortingAlgorithms/QuickSort.js";
// import MergeSort from "Sorting-Visualizer/src/SortingAlgorithms/MergeSort.js";

function UpperRight() {
  const [isToggled, setIsToggled] = useState(false);
  const [formData, setFormData] = useState({
    arraySize: 10,
    SortingAlgorithm: "",
  });
  
  const [array, setArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  

  const toggleComponent = (e) => {
    e.preventDefault();
    if (!isToggled) {
      const form = e.currentTarget;
      const data = new FormData(form);
      const arraysize = parseInt(data.get("ArraySize"),10);
      const SortingAlgorithm = data.get("SortingAlgorithm");
      setFormData({ arraysize, SortingAlgorithm });
      const newArray = generateArray(arraysize);
      setArray(newArray);
      const arrayCopy = [...newArray];
      const sortArr = selectAlgo(SortingAlgorithm, arrayCopy);
      setSortedArray(sortArr);
      selectData(SortingAlgorithm);
    }
    setIsToggled(!isToggled);
  };

  return (
    <form method="get" onSubmit={toggleComponent}>
      {isToggled && (
        <DisplayArea
          SortingName={formData.SortingAlgorithm}
          GeneratedArray={array.join(", ")}
          GeneratedSortedArray={sortedArray.join(", ")}
        />
      )}
      {!isToggled && <InputArea />}
      <button type="Submit" id="submit-container">
        {isToggled ? "Restart" : "Submit"}
      </button>
    </form>
  );
}

export default UpperRight;
