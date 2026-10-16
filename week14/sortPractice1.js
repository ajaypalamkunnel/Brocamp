// function selectionSort(arr){
//     let temp
    
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[i] > arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
//     }
//         console.log(arr)
// }


// function bubbleSort(arr){
//     let temp
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = 0 ; j < arr.length - i - 1 ; j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
    
//     console.log(arr)
// }




// function insertionSort(arr){
//     let i;
//     let key 
    
//     for(let j = 1 ; j < arr.length ; j++){
//         key = arr[j];
//         i = j-1
        
//         while(i>=0 && arr[i] > key){
//             arr[i+1] = arr[i];
//             i  = i - 1
//         }
//         arr[i+1] = key
//     }
//     console.log(arr)
    
// }



// insertionSort([4,55,2,5,233,6])


// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
    
//     let left = [];
//     let right = [];
//     let pivote = arr[arr.length-1]
    
//     for(let i = 0 ; i < arr.length-1 ; i++){
//         if(arr[i] < pivote){
            
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
        
//     }
//     return [...quickSort(left),pivote,...quickSort(right)]
    
    
    
// }




function mergeSort(arr){
    
    if(arr.length<2){
        return arr
    }
    
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}


function merge(leftArr,rightArr){
    let sortedArr = []
    
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}








console.log(mergeSort([4,55,2,5,233,6]))







