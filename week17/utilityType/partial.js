//partial
// let myinfo:Partial<value>={
//     num1:10
// }
// myinfo.num2 = 20
//required
//if use required if any variable is marked as optional
//even if it also makea as requred
var myinfo = {
    num1: 1,
    num2: 3,
    num3: 4
};
console.log(myinfo);
//Record
var fullName = {
    "fname": "ajay",
    "lname": "ps"
};
console.log(fullName);
//we can omit the mentioned values usiging omit
var myNum = {
    num1: 3
    //num3:6      ====>//this makes error because num3 is omited
};
console.log("===>OMITmynum = ", myNum);
// pick
//we should pick the mentioned values
var myNum2 = {
    num2: 44,
    num3: 33,
};
console.log("PICK===>my num2 = ", myNum2);
var myvalue = 545;
var useDetails = {
    name: "Ajay",
    age: 20,
};
// useDetails.age=21 //this will create a error because it is readonly
