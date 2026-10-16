let arr = [1,24,6,7,8,6,24]

let arrsor = arr.sort((a,b)=>a-b);

let unique = new Set(arr);

console.log("sorted array : ",arrsor)
console.log("unique element count : ",unique.size)
console.log("unique elements are : ",unique)

