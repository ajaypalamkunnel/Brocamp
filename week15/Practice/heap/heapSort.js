// function heapSort1(arr){
//     let n = arr.length
//     for(let i = Math.floor(n/2)-1;i>=0;i--){
//         heapify1(arr,n,i)
//     }

//     for(i = n-1 ; i > 0 ; i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]

//         heapify1(arr,i,0)
//     }

// }



// function heapify1(arr,n,i){
    
    
//     let largest = i

//     let left = (2*i)+1
//     let right = (2*i)+2

//     while(left <= n && arr[left] > arr[largest]){
//         largest = left
//     } 

//     while(right <= n && arr[right] > arr[largest]){
//         largest = right
//     }

//     if(largest !== i){
//         [arr[largest],arr[i]] = [arr[i],arr[largest]]
//         heapify1(arr,n,i)
//     }


// }



// let array = [54,3,2,656,4,33,6]

// console.log(array);

// heapSort1(array)


// console.log(array);



// function heapSort(arr){

//     let n = arr.length;

//     for(let i = Math.floor(n/2)-1;i >= 0 ; i--){
//         heapify(arr,n,i)
//     }

//     for(let i = n-1 ; i > 0 ;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
// }


// function heapify(arr,n,i){
//     let largest = i;
//     let left = (2*i)+1;
//     let right = (2*i)+2

//     while((left < n) && (arr[left] >  arr[largest])){
//         largest = left
//     }

//     while((right < n) && (arr[right] > arr[largest])){
//         largest = right
//     }

//     if(largest !== i){
//         [arr[largest],arr[i]] = [arr[i],arr[largest]]
//         heapify(arr,n,i)
//     }


// }

// let array = [54,3,2,656,4,33,6]

// console.log(array);

// heapSort(array)


// console.log(array);



function heapSort(arr){
    let n = arr.length
    for(let i = Math.floor(n/2)-1;i >= 0;i--){
        heapify(arr,n,i)
    }

    for(let i = n-1 ; i > 0 ; i--){
        [arr[i],arr[0]] = [arr[0],arr[i]]

        heapify(arr,i,0)
    }

}



function heapify(arr,n,i){
    let largest = i
    let left = (2*i)+1
    let right = (2*i)+2

    while(left < n && arr[left] > arr[largest]){
        largest = left
    }

    while(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]

        heapify(arr,n,i)
    }
}

 let array = [656,54,3,2,4,33,6]

console.log(array);

heapSort(array)


console.log(array);
