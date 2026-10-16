// const ab = [{af:[34,34,3433,3]},{af:[34,34,3433,81,3]},{af:[34,243,12,34,3433,3,341231]}]


// let res = []
// ab.forEach((item)=>{
//     item.af.forEach((num)=>{
        
//         if((num*num*num)%3===0&& (num%6 !== 0)  ){
//             res.push(num)
//         }
//     })
// })

// console.log(res)


// function mergeSort(arr){
    
//     if(arr.length < 2){
//         return arr
//     }
    
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
    
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
    
// }

// function merge(leftArr,rightArr){
    
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//     if(leftArr[0] < rightArr[0]){
//         sortedArr.push(leftArr.shift())
//     }else{
//         sortedArr.push(rightArr.shift())
//     }}
    
//     return [...sortedArr,...leftArr,...rightArr]
    
// }

// let arr = [5,6,77,66,4]

// console.log(mergeSort(arr))


// function quickSort(arr){
    
//     if(arr.length < 2){
//         return arr
//     }
    
    
//     let pivote = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []
    
//     for(let i = 0 ; i < arr.length-1;i++){
        
//         if(arr[i] < pivote){
//             leftArr.push(arr[i])
//         }else{
            
//             rightArr.push(arr[i])
//         }
        
        
//     }
    
//     return [...quickSort(leftArr),pivote,...quickSort(rightArr)]
    
// }





// let arr = [5,6,77,66,4]

// console.log(quickSort(arr))




// function binarySearch(arr,target){
    
//     let left = 0
//     let right = arr.length-1
//     let mid = Math.floor((left+right)/2)
    
//     // console.log(mid)
    
//     while(left <= right){
        
//         if(arr[mid] === target){
//             return mid
//         }else{
            
//             if(target < arr[mid]){
//                 right = mid-1
//             }else{
//                 left = mid+1
//             }
            
//         }
        
//     }
    
//     return -1
    
    
// }

// let arr = [4,5,77,88,90]

// console.log(binarySearch(arr,77))





