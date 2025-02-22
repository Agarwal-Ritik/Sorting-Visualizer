export function countingSort(array){
    var k = array[0];
    for(var i=1; i<array.length; i++){
        if(array[i]>k){
            k = array[i];
        }
    }
    const freq = new Array(k+1).fill(0);

    for(var i=0; i<array.length; i++){
        freq[array[i]]++;
    }

    for(var i=1; i<freq.length; i++){
        freq[i] += freq[i-1];
    }

    const ans = new Array(array.length);
    
    for(var i=array.length-1; i>=0; i--){
        freq[array[i]]--;
        ans[freq[array[i]]] = array[i];
        
    }

    return ans;
}