let arr = ['hello','hi','guys']

let newArr = arr.map((value)=>{
   let upper = value.toUpperCase()
   return `${upper} - LENGTH: ${upper.length} ` 
})

console.log(newArr);
