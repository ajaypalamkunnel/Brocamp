function heapSort(arr){
    let n = arr.length
    //build max heap
    for(let i = Math.floor(n/2)-1; i >= 0 ; i--){
        heapify(arr,n,i)
    }
    //delete
    for(let i = n-1 ; i > 0 ; i--){
        // root elementum leaf elementum thammill swap

        [arr[0],arr[i]] = [arr[i],arr[0]]
        //swap(arr,0,i)
        //veendum ath max heap aakkunnuu
        heapify(arr,i,0)
    }

    

}



// function swap(arr,i,j){
//     let temp  = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp 
// }

function heapify(arr,n,i){
    let largest = i;
    let left = (2*i)+1;
    let right = (2*i)+2


    while(left < n && arr[left] > arr[largest]){
        largest = left
    }

    while(right < n && arr[right] > arr[largest]){
        largest = right
    }


    if(largest !== i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        //swap(arr,i,largest)
        heapify(arr,n,largest)
    }
}


let arr = [3,6,77,999,4,2,55,88]

heapSort(arr);
console.log("Sorted array:", arr);