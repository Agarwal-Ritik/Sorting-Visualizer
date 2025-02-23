import {bubbleSort} from "./SortingAlgorithms/BubbleSort.js";

export function selectAlgo(sort, arr) {
  let newArray;
  switch (sort) {
    case "Bubble Sort":
      newArray = bubbleSort(arr);
      break;

    case "Selection Sort":
      newArray = selectionSort(arr);
      break;

    case "Insertion Sort":
      newArray = insertionSort(arr);
      break;

    case "Quick Sort":
      newArray = quickSort(arr);
      break;

    case "Merge Sort":
      newArray = mergeSort(arr);
      break;

    case "Counting Sort":
      newArray = countingSort(arr);
      break;

    default:
      console.warn("Invalid sorting algorithm selected: ", sort);
  }

  return newArray;
}
