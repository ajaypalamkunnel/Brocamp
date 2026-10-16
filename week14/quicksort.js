// function quickSort(arr){

//     if(arr.length < 2){
//         return [...arr]
//     }
//     let pivote = arr[arr.length-1];
//     let left = [];
//     let right= [];

//     for(let i = 0 ; i < arr.length-1 ; i++){
//         if(arr[i]<pivote){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivote,...quickSort(right)]
// }





// function quickSort(arr){
//     if(arr.length < 2){
//         return [...arr]
//     }


//     let pivote = arr[arr.length-1];
//     let left = [];
//     let right = [];

//     for(let i = 0 ; i < arr.length-1 ; i++){
//         if(arr[i] < pivote){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivote,...quickSort(right)]
// }


// console.log(quickSort([66,4,5,77,3,8,523]));






function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let left = [];
    let right = []
    let pivote = arr[arr.length-1]

    for(let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i]<pivote){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivote,...quickSort(right)]

}
console.log(quickSort([66,4,5,77,3,8,523]));