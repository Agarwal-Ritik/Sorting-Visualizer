  let newArray;
  array = arr;
  switch (sort) {
    case "Bubble Sort":
      newArray = await bubbleSort(arr, updateGraph, changeColor);
      break;

    case "Selection Sort":
      newArray = await selectionSort(arr, updateGraph, changeColor);
      break;

    case "Insertion Sort":
      newArray = await insertionSort(arr, updateGraph, changeColor);
      break;

    case "Quick Sort":
      newArray = await quickSort(arr, setArray, updateGraph, changeColor);
      break;

    case "Merge Sort":
      newArray = await mergeSort(arr, setArray, updateGraph, changeColor);
      break;

    case "Counting Sort":
      newArray = await countingSort(arr, updateGraph, changeColor);
      break;

    default:
      console.warn("Invalid sorting algorithm selected: ", sort);
  }

  return newArray;
}
let name = "";
export function getSortingName(sortingName) {
  name = sortingName;
}

export function returnSortingName() {
  return name;
}
