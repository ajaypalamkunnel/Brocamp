let arr = [1,24,6,7,25,8,6,24,10]

// let newarr = arr.filter((val)=>val%5!==0)
// console.log(newarr)
let n = arr.length
for(let i = 0 ; i <=n ; i++){
    if(arr[i]%5 === 0){
        for(let j = i ; j < n-1 ; j++){
            arr[j] = arr[j+1]
        }
        n--;
        i--;
    }
    
}
arr.length = n
console.log(arr)

    