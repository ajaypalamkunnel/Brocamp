// function insertionSort(arr) {
//   console.log("Before sort : ", ...arr);

//   let key;
//   let i;
//   let n = arr.length;
//   for (let j = 1; j < n; j++) {
//     key = arr[j];

//     i = j - 1;

//     while (i >= 0 && arr[i] > key) {
//       arr[i + 1] = arr[i];
//       i -= 1;
//     }
//     arr[i + 1] = key;
//   }

//   console.log("after sort : ", ...arr);
// }

// insertionSort([44, 5, 33, 87, 9, 21, 65]);




// function insertionSort(arr){
//     let key;
//     let n = arr.length;
//     let i;
//     console.log("Before sort : ", ...arr);
//     for(let j = 1 ; j < n ; j++){

//         key = arr[j];
//         i = j -1

//         while(i >= 0 && arr[i] < key){
//             arr[i+1] = arr[i];
//             i -= 1
//         }
//         arr[i+1] = key;
//     }

//     console.log("after sort : ", ...arr);
// }

// insertionSort([44, 5, 33, 87, 9, 21, 65]);




// function insertionSort(arr){
//     let n = arr.length;
//     let key

//     for(let j = 1 ; j < n ; j++){
//         key = arr[j];
//         i = j-1;

//         while(i >= 0 && arr[i]>key){
//             arr[i+1] = arr[i]
//             i = i-1
//         }
//         arr[i+1] = key
//     }

//     console.log("after sort : ", ...arr);
// }

// insertionSort([44, 5, 33, 87, 9, 21, 65]);







function insertionSort(arr){
    let key;
    let n = arr.length;
    console.log("before sort: ",...arr);
    for(let j = 1 ; j < n ; j++){
        key = arr[j]
        i = j-1;
        while(i >= 0 && arr[i]>key){
            arr[i+1] = arr[i];
            i = i - 1
        }
        arr[i+1] = key
    }
    console.log("after sort: ",...arr);
}

insertionSort([44, 5, 33, 87, 9, 21, 65]);