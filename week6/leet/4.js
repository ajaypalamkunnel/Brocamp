let arr = [1,24,6,7,25,8,6,24,10]

let newarr = arr.filter((val,i,arr)=>{
    if(val%5===0){
     arr.splice(i+1,2)
    }
})
console.log(...arr)

let sum = arr.reduce((acc,val)=>{
    return acc = acc + val
},0)

console.log(" avg = ",Math.ceil(sum/arr.length))



