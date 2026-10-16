// function bubbleSort(arr){
//      let temp;
//      let n = arr.length
//     console.log("Before sort: ",...arr);
    
//      for(let i = 0 ; i < n ; i++){
//         for(let j = 0 ; j < n-i-1 ;j++){
//             if(arr[j]>arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//      }

//      console.log("after sort: ",...arr);
// }



// function bubbleSort(arr){

//     let n = arr.length;
//     let temp;


//      for(let i = 0 ; i < n ; i++){
//         for(let j = 0 ; j < n-i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//      }

//      console.log("after sort: ",...arr);
// }



// function bubbleSort(arr){
//     let n = arr.length;
//     let temp;
//     console.log("before sort: ",...arr);
//     for(let i = 0 ; i < n ; i++){
//         for(let j = 0 ; j < n-i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     console.log("after sort: ",...arr);
// }




function bubbleSort(arr){
    let n = arr.length
    let temp
    console.log("before sort: ",...arr);
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n-i-1 ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    console.log("after sort: ",...arr);
}






bubbleSort([5,66,333,32,6,55,3,22,7,99])