export function selectionSort(array){
    for(var i = 0; i<array.length-1; i++){
        var min = i;
        for(var j=i+1; j<array.length; j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        swap(array, min, i);
    }
    return array.join(", ");
}

function swap(array, min, i){
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
}