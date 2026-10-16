// //remove even numbers

// let nums = [4,6,32,5,2,5]
// console.log(nums.filter(num=>num%2!==0));


// // -------------------------------------------

// // second largest using reduce

// const arr = [10, 5, 8, 20,35, 15];

// let res = arr.reduce((acc,num)=>{
    
//     if(num > acc.first){
        
//         acc.second = acc.first
//         acc.first = num
//     }else if(num < acc.first && num > acc.second){
//         acc.second = num
//     }
//     return acc
// },{first:-Infinity,second:-Infinity})

// console.log(res)






// //remove prime number
function isPrime(num){
    
    if(num<=1)return false
    if(num===2)return true
    if(num%2===0)return false
    
    for(let i = 3 ; i <= num/2; i++){
        if(num%i === 0)return false
    }
    return true
    
}


// let arr = [4,5,3,2,5,2,6,7,8]

// arr = arr.filter((num)=>!isPrime(num))

// console.log(arr)





// function* generateEven(start,limit){
//     if(start < limit){
//         for(let i = start;i < limit;i++){
            
//             if(i%2===0){
//                 yield i
//             }
//         }
        
//     }else{
//         yield "start must greater than limit"
//     }
    
// }

// let evenGenerator = generateEven(1,10)

// console.log(evenGenerator.next().value)
// console.log(evenGenerator.next().value)
// console.log(evenGenerator.next().value)




// //IIFE
// (
//     function(){
//         console.log("I am IIFE")
//     }
// )()


// //even generaator
// function* evenGenerator(start,end){
    
//     for(let i = start; i <= end;i++){
//         if(i%2===0){
//             yield i
//         }
//     }
    
// }


// const generate = evenGenerator(10,80)

// console.log(generate.next().value)
// console.log(generate.next().value)
// console.log(generate.next().value)
// console.log(generate.next().value)




// //call, apply, bind

// //call--------------------
// let person = {
//   name: "Ajay"
// };

// function greet(age) {
//   console.log("Hello, my name is " + this.name + " and I am " + age + " years old.");
// }

// greet.call(person,21)


// //-------------------------------------------
// //apply
// let person2 = {
//     name:"ajay"
// }

// function hello(age,place){

//     console.log(`Hello my name is ${this.name} I am from ${place}  age of ${age}`);
    
// }


// hello.apply(person2,[12,"pala"])




// //bind------------

// let user = {
//     name : "ajay",
//     age:20

// }


// function greet(place){
//     console.log(`Hello my name is ${this.name} I am from ${place}  age of ${this.age}`);
    
// }


// let greetUser = greet.bind("pala")

// ///---------------------------------------------------------------




//protottypal inheritance


let object = {
    name:"ajay",
    place:"Pala"
}


let object2 = {
    age : 20
}




object2.__proto__ = object;



console.log(object2.name)



// generator function to print alternate odd numbers from 1-100 in reverse order


function* generateOdd(){
    
    for(let i = 1 ; i < 100 ;i+=2){
        yield i
    }
    
}

let generate = generateOdd()

for(let i = 1 ; i <= 50 ; i++){
    console.log(generate.next().value)
}


// write a function to convert a obj to string
// output = "name=hi&age=20".
let obj = {
name: 'hi',
age: 20
}


let len = Object.values(obj).length

console.log(len)

function conveter(obj){
    
    let str = ''
    let i = 1
    for(let key in obj){
        str += `${key}=${obj[key]}`
        if(i!==len){
            str+='&'
        }
        i++
        
    }
    console.log(str)
}

conveter(obj)













let arr = [1,2,33,[3,6],4,4,555,6,[7,8,10,5,[4,2,3,7,89,9]]]



let uniqueValues = new Set()

function removeDuplicates(item){
    
    if(Array.isArray(item)){
        let result = []
        for(let el of item){
            result.push(removeDuplicates(el))
        }
        return result
    }else{
        if(!uniqueValues.has(item)){
            uniqueValues.add(item)
            return item
        }else{
            return null
        }
    }
    
}

function cleanArray(arr){
    let result = []
    
    for(let el of arr){
        
        if(Array.isArray(el)){
            result.push(cleanArray(el))
        }else if(el !== null){
            result.push(el)
        }
        
    }
    return result
}

let withoutDuplicates = arr.map(removeDuplicates);

let finalResult = cleanArray(withoutDuplicates);

console.log(finalResult);

