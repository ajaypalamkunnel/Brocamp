interface IPerson{
    fname:string,
    lname:string,
    sayHai:()=>string
}


let admin:IPerson = {
    fname:"Ajay",
    lname:"ps",
    sayHai:function ():string{
        return `hi ${this.fname}`;
    }
}

console.log(admin.sayHai());



type Student ={
   name:string
   std:number
}


let details:Student={
   name:"ajay",
   std:4 
}

// interface IPerson {
//     fname: string,
//     lname: string,
//     sayHai: () => string
// }

// let admin: IPerson = {
//     fname: "Ajay",
//     lname: "ps",
//     sayHai: function (): string { // Use a regular function here
//         return `Hi ${this.fname}`; // Correct the property name
//     }
// }

// console.log(admin.sayHai());





interface User{
    readonly dbId:number,
    email:string,
    userId:number
    googleId?:string //optional
   // startTrial:()=>string //one way
    startTrail2():string //secind way
}

const ajay:User={dbId:21,email:"ajay@gmail.com",userId:321,

    // startTrial()={
    //     return ""
    // }
    startTrail2:()=>{
        return "trial started"
    }

}


//multiple interefa
interface IParent1 { 
    v1:number 
 } 
 
 interface IParent2 { 
    v2:number 
 } 
 
 interface Child extends IParent1, IParent2 { } 
 var Iobj:Child = { v1:12, v2:23} 
 console.log("value 1: "+this.v1+" value 2: "+this.v2)




 //interface inheritance

 interface Printable {
    print(): void;
 }
 
 interface Scanable {
    scan(): void;
 }
 
 interface MultifunctionalDevice extends Printable, Scanable {
    copy(): void;
 }
 
 class Printer implements MultifunctionalDevice {
    print() {
       console.log("Printing...");
    }
 
    scan() {
       console.log("Scanning...");
    }
 
    copy() {
       console.log("Copying...");
    }
 }
 
 const printer = new Printer();
 printer.print(); 
 printer.scan(); 
 printer.copy(); 




 interface UserPro{
    name:string
 }

 interface EnhancedUser extends UserPro{
    greet():void
 }


const useme:EnhancedUser={
    name:"Ajay",
    greet() {
        console.log(`Hello my name is ${this.name}`);
        
        
    }
 }

 useme.greet()