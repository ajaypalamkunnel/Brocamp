

function selectionSort(arr){

    let len = arr.length

    for(let i = 0 ; i < len ; i++){

        let indexOfMin = i

        for(let j = i+1 ; j < len ; j++){

            if(arr[j] < arr[indexOfMin]) indexOfMin = j

        }

        if(indexOfMin !== i){

            [arr[indexOfMin],arr[i]] = [arr[i],arr[indexOfMin]]

        }

    }

}

let arr = [4,665,7,3,-5,6,49]

selectionSort(arr)

console.log(arr);

