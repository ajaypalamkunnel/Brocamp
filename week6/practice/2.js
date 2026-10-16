let arr = ['hello','world','javascript'];

let newArr = arr.map((value)=>{
    return value.charAt(0).toUpperCase() + value.slice(1)
})
console.log(newArr);
