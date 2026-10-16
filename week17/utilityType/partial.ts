
interface value{
    num1:number
    num2:number
    num3:number
}
//partial
// let myinfo:Partial<value>={
//     num1:10
// }
// myinfo.num2 = 20


//required
//if use required if any variable is marked as optional
//even if it also makea as requred
const myinfo:Required<value>={
    num1:1,
    num2:3,
    num3:4
}
console.log(myinfo);


//Record

const fullName:Record<string,string>={
    "fname":"ajay",
    "lname":"ps"
    

}
console.log(fullName);




//OMIT


interface numbers{
    num1:number
    num2:number
    num3:number
}

//we can omit the mentioned values usiging omit
const myNum:Omit<numbers,"num2"|"num3">={
    num1:3
    //num3:6      ====>//this makes error because num3 is omited
}

console.log("===>OMITmynum = ",myNum);

// pick

//we should pick the mentioned values
const myNum2:Pick<value,'num2'|'num3'>={
    num2:44,
    num3:33,
   

}

console.log("PICK===>my num2 = ",myNum2);




//Exclude

type data = string|number|boolean

const myvalue:Exclude<data,string>=545
// const myvalue:Exclude<data,string>='ajay ps'
//this leads to error because  string type is excluded from the data



type Users ={
    name:string,
    age:number
}


const useDetails:Readonly<Users>={
    name:"Ajay",
    age:20,
}


// useDetails.age=21 //this will create a error because it is readonly