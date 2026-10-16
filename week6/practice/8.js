let arr = [1,2,3,4,5,6];


let newArr = arr.map((value)=>{
    if(value%2==0){
        return "even"
    }else{
        return "odd"
    }
})

console.log(newArr);
