// // console.log("Hello world");

// // get();
// // console.log(x);
// // console.log(get);

// // var x =10;
// // function get(){
// //     console.log("Helloooo");
// // }

// // function a(){
// //     var b =10
// //     c();

// //     function c(){
// //         var g=100;
// //         console.log(b);

// //         console.log(g);
// //     }

// // }
// // a();
// // //console.log(b);

// // console.log(a);

// // let a =20;
// // var b = 30;

// // const output=[];

// // const arr = [2,4,6,8];

// // let db = function(x){
// //     return x*x;
// // }

// // const output = arr.map(db);

// // //console.log("array : "+output);

// // let newarr = {...arr}

// // console.log(newarr[0]);

// // const people = [
// //     {
// //       id: 1,
// //       name: 'Alice',
// //       age: 25
// //     },
// //     {
// //       id: 2,
// //       name: 'Bob',
// //       age: 30
// //     },
// //     {
// //       id: 3,
// //       name: 'Charlie',
// //       age: 35
// //     },
// //     {
// //       id: 4,
// //       name: 'Diana',
// //       age: 28
// //     },
// //     {
// //       id: 5,
// //       name: 'Eve',
// //       age: 22
// //     }
// //   ];

// //   console.log(people[1].name);

// // let newcp = [, , , , ...rest] = people;

// // console.log(newcp[1]);

// // let x = function(){
// //     console.log("heeeee");
// // }

// // x();

// // const prices = [200, 200, 300, 400, 500];

// // // const newarr = prices.map(price => price*2);
// // // const newarrr = prices.reduce((total,value)=>total);
// // // // console.log(newarr);

// // // console.log(newarrr);

// // let arrSum = prices.reduce((sum,value)=>sum+value,0)

// // console.log(arrSum);

// //call

// let name1 = {
//     firstname:"Ajay",
//     lastname:"ps"
// }

// // let printFullName = function(hometown,state){
// //     console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state);
// // }

// // printFullName.call(name1,"Delhi","india");

// let name2={
//     firstname:"Appu",
//     lastname:"ps"
// }

// // printFullName.call(name2,"kochi")

// // //apply
// // printFullName.apply(name2,["ktm","KL"])

// // //bind

// let printMyName = printFullName.bind(name2,"KL","DL");

// console.log(printMyName);
// printMyName()

// //shallow copy
// // const prices = [200, 200, 300, 400, 500];

// // let newp = Object.assign([],prices);

// // newp[3] = 200000;

// // console.log(prices);
// // console.log(newp);

// //Deep copy

// // let newp = Object.assign([],prices);

// // newp[3] = 200000;

// // console.log(prices);
// // console.log(newp);

// // const person ={
// //     fullname:"happy",
// //     age:30,
// //     address:{
// //         city:"Delhi",
// //         country:"India"
// //     }

// // }

// // const newperson = {...person}

// // newperson.address.city="chennai";

// // console.log(person);
// // console.log(newperson);

// //spread operator

//  let arr1=[10,20,30,40]
// // let arr2 =[50,60,70,80]

// // let arr3 = [...arr1]

// // console.log(...arr3);

// let [a1,a2,a3] = arr1;

// console.log(a1);

// const person ={
//         fullname:"happy",
//         age:30,
//         address:{
//             city:"Delhi",
//             country:"India"
//         }
// }

// let {fullname,age,address:{city,country}}=person

// console.log(fullname);

// function* my(){

//     yield "hi"
//     yield "hello"
//     yield "namasthe"
// }

// const obj = my()

// console.log(obj.next(), obj.next());

// let hello = (b)=>{console.log("hellloooooooooooo"+b);}

// hello(5)



// let arr = [3, 1, 4, 1, 2];
// arr.sort();
// console.log(arr);
// let revarr = arr.reverse()
// console.log(revarr); 

// 
// let a= 200;
// console.log(a);
// {
//      let a=10
//     console.log(a);
// }
// console.log(a);

//  var l = ()=>{
//     console.log("Iam l");
// }
// l()

// let mystr = "helloworld"

// let newstr = mystr.split("").reverse().join("")

// console.log(newstr);

function hello(n1,n2,cb){

    console.log("calculation processing");
    cb(n1,n2)
}

function add(a,b){
    console.log(a+b);
}

function main(){
    hello(10,20,add)
}

main()