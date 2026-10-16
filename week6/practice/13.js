let arr = [50,200,1500,800,25];

let newArr = arr.filter((value)=>{
    return value > 100 && value < 1000
})

console.log(newArr);
