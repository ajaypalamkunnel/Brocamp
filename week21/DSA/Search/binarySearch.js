function binarySearch(arr,target){

    let rightIndex = arr.length-1
    let leftIndex = 0

    while(leftIndex <= rightIndex){

        let middleIndex = Math.floor(((leftIndex+rightIndex)/2))

        if(arr[middleIndex] === target){
            return middleIndex+1
        }else{
            if(target < arr[middleIndex]){
                rightIndex = middleIndex-1
            }else{
                leftIndex = middleIndex+1
            }
        }
        
    }
    return -1

}


let arr = [34,46,52,88,120]

console.log(binarySearch(arr,120));
 