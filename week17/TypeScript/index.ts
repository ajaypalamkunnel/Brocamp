//infer types (implicity types)

//let username = "ajay";
// username = 433 ====> makes error Ts automatically typed to string

//let age = 20;
// age = dfd;  ====> makes error Ts automatically typed to number 



//Definging types (Explicit types)


let place: string = "Hello world";
let pincode:number = 686576;
let isNice:boolean = true;
let skills:string[] = ['JS','TS']
let salary:number[] = [4,32,4,2,]
let emptyArry: [] = [];

let userDetails: {name:string;age:number} = {
    name:'ajay',
    age:20

}

console.log(place);

console.log(userDetails.name);


class Greetings{
    greet():void{
        console.log("Good Morning");
    }
}

let gree = new Greetings()

gree.greet()



// function adder(a:number,b:number){
//     return a+b
// }

// console.log(adder(5,5));

// interface
interface IPerson{
    firstname:string;
    lastname:string;
    getFullName():string
}


let obj: IPerson={
    firstname: 'John',
    lastname:'Doe',

    getFullName():string{
        return this.firstname+' '+this.lastname;
    }
}

console.log(obj.getFullName());






//class


class Greeting{
 greeting:string

 constructor(message:string) {
    this.greeting = message    
 }

 greet(){
    return 'Hello'+' '+this.greeting
 }
}

let greater = new Greeting('world')

console.log(greater.greet())



//interface

interface Details{
    name:string;
    age:number;
    salary:number;
    getName:() => void;
}

let userDetailsEMP:Details = {
    name:"Ajay",
    age:20,
    salary:20000,
    getName(){
        console.log(this.name);
        
    }
}


type studentDetails = {
    name:string;
    age:number;
    salary:number;
    getName:() => void;
}

//union / optional
//this is optional or union if you have give different type variables to the value you can write like this
type staffDetails = {
    name:string;
    age:number | string;
    salary:number;
    getName?:() => void; // if we put a question mark in the variable declaration the variable make as optional 
                        //variable make as optional not mandatory  
}
let EMPskills:(number|string|boolean)[] = ["JS",5,'dvf']



// fucntions


function getUsername(userDetails:Details){

    //function nte ullill types mention cheyyuvanegil endokkeyanu 
    //object ill ullath endhannu ennu kaanan pattum
    return userDetails.name

}

console.log(getUsername(userDetailsEMP));


//inganeyanu functionntee return cheyunna variablente type specify cheyyunnath 
function getage():number{
    return 10
}

//Tupple


let tup:[number,string,boolean] = [20,'ajay',true]
 

console.log(tup[1]);



let prayam:(number|string) = 'two'


