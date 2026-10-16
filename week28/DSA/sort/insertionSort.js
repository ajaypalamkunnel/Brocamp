function insertionSort(arr){

    
    for(let i = 1 ; i < arr.length;i++){
        
        let numberToInsert = arr[i]

        let j = i - 1

        while(j >= 0 && arr[j] > numberToInsert){

            arr[j+1] = arr[j]
            j = j-1
        }

        arr[j+1] = numberToInsert


    }

}



const arr = [4,5,2,-6,77,8]
console.log(arr);

insertionSort(arr)

console.log(arr);

//O(n^2)                