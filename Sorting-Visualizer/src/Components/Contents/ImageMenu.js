let imageArr = ["https://titrias.com/files/2015/08/Untitled.png","https://www.w3schools.com/dsa/img_runtime_bubbleSort.png","https://www.w3schools.com/dsa/img_runtime_mergesort.png","https://www.w3schools.com/dsa/img_runtime_quicksort.png","https://www.w3schools.com/dsa/img_runtime_bubbleSort.png","https://www.w3schools.com/dsa/img_runtime_bubbleSort.png","https://www.w3schools.com/dsa/img_runtime_countingSort.png"]

let definitionArr = ["Sorting algorithms are fundamental techniques used in computer science to arrange elements in a particular order, typically ascending or descending. These algorithms help in organizing data efficiently, enabling quicker searches, comparisons, and optimizations in various applications.", 
    "Bubble sort is a basic algorithm for arranging a elements of an array in the correct order. The method works by examining each set of adjacent elements in the array, from left to right, switching their positions if they are out of order. The algorithm then repeats this process until it can run through the entire array and find no two elements that need to be swapped.", 
    "A merge sort is a more complex sort, but also a highly efficient one. A merge sort uses a technique called divide and conquer. The list is repeatedly divided into two until all the elements are separated individually. Pairs of elements are then compared, placed into order and combined. The process is then repeated until the list is recompiled as a whole.",
    "The quick sort method sorts an array by selecting a pivot value. To sort the list into ascending order, the array is partitioned so that values lower than the pivot are moved so that they come before it, and values larger than the pivot are moved so that they come after it. This creates two partitions. The process is repeated on smaller and smaller partitions until the array is fully sorted.",
    "The selection sort algorithm, is remarkably effective. A comparison-based algorithm divides the list into two parts: the sorted part on the left and the unsorted part on the right. Initially, the sorted section is empty, and the unsorted section contains the entire list. This effectiveness is particularly evident when sorting a small list.",
    "Insertion sort is a basic sorting algorithm that sequentially sorts each item in the final sorted array or list. It is significantly low on efficiency while working on comparatively larger data sets. While other algorithms such as quicksort, heapsort, or merge sort have time and again proven to be far more effective and efficient.", 
    "Counting sort is a sorting technique that is used when the range of keys is relatively small and there are duplicate keys. Counting sorts differ from sorts that compare data in multiple passes. They work by creating an array of counters the size of the largest integer in the list therefore, the keys must be integers or data that can be readily converted to integers."]


// sorting - Sorting algorithms are fundamental techniques used in computer science to arrange elements in a particular order, typically ascending or descending. These algorithms help in organizing data efficiently, enabling quicker searches, comparisons, and optimizations in various applications.

// bubble - Bubble sort is a basic algorithm for arranging a elements of an array in the correct order. The method works by examining each set of adjacent elements in the array, from left to right, switching their positions if they are out of order. The algorithm then repeats this process until it can run through the entire array and find no two elements that need to be swapped.

// selection - The selection sort algorithm, while simple, is remarkably effective. An in-place comparison-based algorithm divides the list into two parts: the sorted part on the left and the unsorted part on the right. Initially, the sorted section is empty, and the unsorted section contains the entire list. This effectiveness is particularly evident when sorting a small list.

// insertion - Insertion sort algorithm is a basic sorting algorithm that sequentially sorts each item in the final sorted array or list. It is significantly low on efficiency while working on comparatively larger data sets. While other algorithms such as quicksort, heapsort, or merge sort have time and again proven to be far more effective and efficient.

// merge - A merge sort is a more complex sort, but also a highly efficient one. A merge sort uses a technique called divide and conquer. The list is repeatedly divided into two until all the elements are separated individually. Pairs of elements are then compared, placed into order and combined. The process is then repeated until the list is recompiled as a whole.

// quick - The quick sort method sorts an array by selecting a pivot value. To sort the list into ascending order (low to high), the array is partitioned so that values lower than the pivot are moved so that they come before it, and values larger than the pivot are moved so that they come after it. This creates two partitions. The process is repeated on smaller and smaller partitions until the array is fully sorted.

// counting - Counting sort is a sorting technique that is used when the range of keys is relatively small and there are duplicate keys. Counting sorts differ from sorts that compare data in multiple passes. They work by creating an array of counters the size of the largest integer in the list; therefore, the keys must be integers or data that can be readily converted to integers.

export function selectData(sort){
    
    switch(sort){
        case "Bubble Sort":
            source = imageArr[1];
            break;
        case "Merge Sort":
            break;
        case "Quick Sort":
            break;
        case "Selection Sort":
            break;
        case "Insertion Sort":
            break;
        case "Counting Sort":
            break;
        default:
            source = imageArr[0];
            break;

                    
    }
}


