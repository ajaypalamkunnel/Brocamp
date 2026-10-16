
// Given an array of integers and a number k, rotate the array to the
//  right by k steps. The rotation should be done
//   in-place (no extra array). - Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3

// Output: [5, 6, 7, 1, 2, 3, 4]



// let trace = 0
// for(let i = k+1 ; i < arr.length;i++){
//     let temp = arr[i]
//     arr[i] = arr[trace]
//     arr[trace] = temp
//     trace++
// }

// console.log(arr)