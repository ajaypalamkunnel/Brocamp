let employee = {
    accessmail:true,
    canAccesDesktop(){
        return "Employee can access desktop";
    }
}

let admin ={
    accessAllMails:true
}

console.log(admin.accessmail);//undefined

admin.__proto__ = employee;

console.log(admin.accessmail);

let owner ={
    isowner: true
}

owner.__proto__ = admin;

console.log(owner.accessmail);



// var my = function () => {
//     console.log("sfsdfsdfvdds");


// function hello(hi = (j) => { console.log("sdgfsdf"+j); }) {
//     hi(5); // Call the hi function
// }


// hello();



// function f() {
//     //"use strict";
//     return this.global.nodeTiming;
// }
// console.log(f()); // undefined

let arr = [100,30,50,60];

let arr1 = [...arr];

arr1[1]=300
console.log(arr);
console.log(arr1);



