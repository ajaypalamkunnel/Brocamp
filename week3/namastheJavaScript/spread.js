//array spread

// let arr = [19.3,4,7,4,3,3,2]
// console.log(...arr);
// let arr1 = ["one","tow","three"]

// let newarr = [...arr];
// let joinedArry = [...arr,...arr1]
// console.log(newarr);
// newarr[0] = 19
// console.log("OLD :",arr);

// console.log("UPDATED :",newarr);

// console.log("Joined : ",joinedArry);



//ogject spread

let obj1 ={
    country: "India"
}

let obj2 ={
    language: "Mal"
}

let obj3 = {
    pop:300000
}

let num = [1,3,4,5]

let joined = {...obj1,...obj2,...obj3}
console.log(joined);

console.log(...num);

