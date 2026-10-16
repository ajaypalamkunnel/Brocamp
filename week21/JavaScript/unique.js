let arr = [3,5,6,3,6,7,4,3,6,8]

let unique = arr.filter((num,index,arr)=>{
    return arr.indexOf(num)===arr.lastIndexOf(num)
})

console.log(unique)