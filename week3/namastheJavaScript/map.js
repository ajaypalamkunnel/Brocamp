// // Creating a Map
// let myMap = new Map();

// // Adding elements to the Map
// myMap.set('key1', 'value1');
// myMap.set(2, 'value2');
// myMap.set(true, 'value3');

// myMap.set("name","Ajay",)


// // Iterating over keys and values
// myMap.forEach((value, key) => {
//     console.log(`Key: ${key}, Value: ${value}`);
// });


const num = [1,2,3,4,5,]
// //return a new array
// let sq = num.map((num)=>{return num*2})
// console.log(sq);



// let students = ["ajay","arju","achu"];

// let up = students.map((names)=>{return names.toUpperCase()})
// console.log(up);



// let mul2 = num.map((num)=>{
//     if(num%2 === 0){
//         return num;
//     }else{
        
//     }
// })

// console.log(mul2);


//#1

/*
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.map((num)=>{
    return num*2
}));
*/



//2
/*
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

console.log(people.map((data)=>{
    return data.name
}));
*/


//3

/*
let words = ['hello', 'world', 'javascript'];


console.log(words.map((word)=>{
    return word.toUpperCase()
}));

*/


//4
/*
let numbers = [10, 20, 30, 40];

console.log(numbers.map((num,index)=>{
    return {"value": num, "index":index }
}));
*/


//5


let dates = ['12/31/2020', '01/01/2021', '07/04/2021'];


let newDate = dates.map((value=>{
    let [month,day,year] = value.split("/");
    return `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}`
}))

console.log(newDate);
