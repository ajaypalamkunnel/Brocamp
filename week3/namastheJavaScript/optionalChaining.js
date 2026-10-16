// const user={
//     name:"Ajay",
//     age:"20",
//     address:{
//         city:"Kochi",
//         zip:"686576"
//     }
// }

// console.log(user.address?.city);
// if(user.address?.phone == undefined){
//     console.log("phone is not available");
// }

// console.log(user.address?.country == india ?? USA);


// let name = null;
// let def = "guesy";

// let finalName = name ?? def

// console.log(finalName);



// let newmy = [...myarr]

// let deepcopy = JSON.parse(JSON.stringify(myarr))
// newmy[5][0] = 4000

// deepcopy[5][2]=60000
// console.log(myarr);
// console.log(newmy);
// console.log(deepcopy);

//1
// let myarr = [5,6,3,7,8];
// let len=myarr.length;
// myarr.splice(len-1,1);
// console.log(myarr);


//2

// function sum(...args){
//    return args.reduce((acc,num)=>{
//         return acc+num
//     },0)

// }

// console.log(sum(5,5,5)); 

//3

// function* genfun(num){
//     let multiplier = 1

//     while(true){
//         yield num*multiplier;
//         multiplier++
//     }
// }

// let mul = genfun(2);

// console.log(mul.next().value,mul.next().value,mul.next().value);




//4
// let mystr = "MALAYaLAM".toLowerCase();

// let rev = mystr.split("").reverse().join("");

// if(mystr==rev){
//     console.log("string is palindrome");
// }else{
//     console.log("string is not palindrome");
// }
// console.log(mystr);
// console.log(rev);


// let str = "Hello world"

// let newstr = str.split(" ");
// console.log(newstr);

// console.log(newstr.reverse().join(" "));



// let myarr = [5,6,3,7,8];

// let newarr =myarr.slice(1,4);

// console.lo/g(newarr);


// let myarr = [5,6,3,7,8];

// let newarr = [...myarr]

// console.log(newarr);


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     email: 'john.doe@example.com',
//     address:{
//         city:"kochi",
//         state:"kl"
        
//     }
// };

// for (let key in person) {
    
//         console.log(`${key}: ${person[key]}`);
    
// }

// var a = 10;
// {
// var a = 20

// }

// console.log(a);



// let myarr = [5,6,3,7,8];
// let mystr = "ajay";

// console.log(myarr.includes(6));

let a = ()=>{
    console.log("heloo");
}
a()
