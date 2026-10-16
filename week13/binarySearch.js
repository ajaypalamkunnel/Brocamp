// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length -  1;

//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(arr[middleIndex] === target){
//             return middleIndex
//         }

//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         }else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([3,5,6,7,88],88));



function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex ){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);

        if(arr[middleIndex]===target){
            return middleIndex;
        }else{
            if(target < arr[middleIndex]){
                rightIndex = middleIndex - 1
            }else{
                leftIndex = middleIndex + 1
            }
        }
    }

    return -1
}


console.log("Search found at :",(binarySearch([4,6,9,54,88],88)), "th index");

