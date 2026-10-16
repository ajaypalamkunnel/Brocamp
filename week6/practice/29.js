let arr = [1,3,5,4,68,3]

let sq = [];
let cu = [];

arr.forEach((value)=>{
    if(value%2===0){
        let cube = value * value * value;
        cu.push(cube);
    }else{
        let square = value * value
        sq.push(square);
    }
})


console.log("square : ",sq);
console.log("Cube : ",cu);
