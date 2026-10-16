let numbers = [1,2,3,4,5,6,7,8];

let even = numbers.filter((num)=>{
    return num%2===0
})

let odd = numbers.filter((num)=>{
    return num%2!==0
})

console.log(even);
console.log(odd);