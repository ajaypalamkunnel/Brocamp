const array = [1, 2, 2, 3, 4, 4, 5];


let newArr = array.filter((value,index,self)=>{
    return self.indexOf(value) === index;

})

console.log(newArr);


