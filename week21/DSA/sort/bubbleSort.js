function bubbleSort(arr){

    for(let i = 0 ; i < arr.length;i++){
        for(let j = 0 ; j < arr.length-i-1 ;j++){
            if(arr[j] > arr[j+1]){
                let temp =  arr[j]
                arr[j] = arr[j+1]
                arr[j+1] =  temp 
            }
        }
    }


    return arr
}

// Generate an array with 4000 random 4-digit integers
const arr = Array.from({ length: 4000 }, () => Math.floor(Math.random() * 9000) + 1000);



console.log(bubbleSort(arr));
