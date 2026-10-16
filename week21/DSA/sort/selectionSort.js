function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

        if(arr[j]<arr[i]){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }

    }
  }

  return arr
}

let arr = [45,43,6,3,22,44,57,44,4]
console.log(selectionSort(arr));
