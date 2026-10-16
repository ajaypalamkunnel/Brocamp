function heapify(arr,n,i){
    
    let parent = i
    let left = 2*i+1
    let right = 2*i+2
    
    if(left < n && arr[left] > arr[parent]){
        parent = left
    }
    
    if(right < n && arr[right] > arr[parent]){
        parent = right
    }
    
    if(i !== parent){
        [arr[parent],arr[i]] = [arr[i],arr[parent]]
        heapify(arr,n,parent)
    }
    
    
}

function sort(arr){
    let n = arr.length
    
    for(let i = Math.floor((n-1)/2); i >= 0 ;i--){
        heapify(arr,n,i)
    }
    
    for(let i = n-1 ; i > 0;i--){
        [arr[i],arr[0]] = [arr[0],arr[i]]
        heapify(arr,i,0)
    }
    return arr
}

let arr = [54,6,67,4,77,87,8,45]

console.log(sort(arr))





