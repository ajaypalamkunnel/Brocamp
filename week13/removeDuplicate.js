function removeDuplicate(arr){

    let uniqueArry = []
    for(let i = 0 ; i < arr.length ; i++){
        if(!uniqueArry.includes(arr[i])){
            uniqueArry.push(arr[i])
        }
    }
    return uniqueArry
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
