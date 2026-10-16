//1

/*
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((tot,num)=>{
     tot = tot + num;
    return tot;
},0)

console.log(sum);
*/


//2
/*
let numbers = [1, 2, 3, 4];

let product = numbers.reduce((pro,num)=>{
   return pro = pro*num;
},1)

console.log(product);
*/


let nestedArray = [[1, 2], [3, 4], [5, 6]];

let flat = nestedArray.reduce((acc,curVal)=>{
   return acc.concat(curVal)
},[])

console.log(flat);
