let arr = ['hello','world','javascript','code'];


let newArr = arr.filter((value)=>{
    return value.length >= 5;
})

console.log(newArr);
