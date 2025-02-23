function swap(arr, i , j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
export function bubbleSort(arr){
    let n = arr.length;
    for(let i = n-1; i >= 1; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}