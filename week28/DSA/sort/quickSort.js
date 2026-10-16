function quickSort(arr){
    
    if(arr.length < 2){
        return arr
    }
    
    
    let pivote = arr[arr.length-1]
    let leftArr = []
    let rightArr = []
    
    for(let i = 0 ; i < arr.length-1;i++){
        
        if(arr[i] < pivote){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
        
    }
    
    return [...quickSort(leftArr),pivote,...quickSort(rightArr)]
    
}


let arr = [4,665,7,3,-5,6,49]



console.log(quickSort(arr));


