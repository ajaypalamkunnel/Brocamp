function selectionSort(arr){
    let temp;
    let n = arr.length;
    console.log("Before sort : ",...arr);
    
    
    for(let i = 0 ; i < n ; i++){
        for(let j = i+1 ; j < n ; j++){
            if(arr[i] > arr[j]){
                temp   = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    
    console.log("After sort : ",...arr);
}

selectionSort([5,33,2,7,77,8,98,4,33])