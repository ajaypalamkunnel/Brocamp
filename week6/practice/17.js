let values = [
    "u",
    0,
    true,
    false,
    null,
    undefined,
    "hello",
    42,
    "sdgfd"
]



let newTruthy = values.filter((value)=>{
    if(value)return value
})

console.log(newTruthy);
