let arr = [1,24,6,7,25,8,6,24,10]
console.log("orginal array : ",...arr )
let min = Math.min(...arr)

arr.splice(arr.indexOf(min),1)
console.log(...arr)



