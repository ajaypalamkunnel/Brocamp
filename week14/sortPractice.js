// function selectionSort(arr){
//     let temp
//     console.log(("Before sort: ",arr));
    
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[i]>arr[j]){
//                 temp   =   arr[i];
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(("After sort: ",arr));
// }

// selectionSort([55,3,6,22,88,33,1])




// function bubbleSort(arr){
//     let n = arr.length
//     let temp
//     console.log(("Before sort: ",arr));
//     for(let i = 0 ; i < n ; i++){
        
//         for(let j = 0 ; j < n-i-1 ; j++){
//             if(arr[j] > arr[j+1]){
//                 temp     = arr[j];
//                 arr[j]   = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(("After sort: ",arr));
// }
// bubbleSort([55,3,6,22,88,33,1])




function insertionSort(arr){
    let n = arr.length;
    let key ,i
    console.log(("Before sort: ",arr));
    for(let j = 1 ; j < n ; j++){
        key = arr[j]
        i = j - 1;

        while(i >= 0 && arr[i] > key ){
            arr[i+1] = arr[i];
            i = i-1
        }
        arr[i+1] = key
    }
    console.log(("After sort: ",arr));
}


insertionSort([55,3,6,22,88,33,1])