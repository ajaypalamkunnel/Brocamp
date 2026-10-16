let arr = ['anto','anu',"achu"];
//shallow copy
let arr2 = arr

console.log(arr);
console.log(arr2);

arr.push("anju")
console.log();
console.log();

console.log(arr);
console.log(arr2);


//Deep copy #1


let deepCopy = JSON.parse(JSON.stringify(arr))
console.log();
console.log("-----deep Copy-------");
console.log();




deepCopy.push("newmem")

console.log(deepCopy);
console.log(arr);






//deep copy 2
console.log();
console.log("---new deep 2---");
console.log();



let newDeepSpread = [...arr]
newDeepSpread.push('newmemer from spread')
console.log(newDeepSpread);
console.log(arr);

console.log();
console.log("------Object copies-----");
console.log();


let emp1 = {
    name : 'Franklin',
    company: 'Microsoft'
}


console.log(emp1);

//shallow copy


let emp2 = emp1;
emp2.age=20;
console.log(emp1);
console.log("---shallow copy");
console.log(emp2);

//object deepcopy

let objectDeepCopy = JSON.parse(JSON.stringify(emp1))

console.log();
console.log("----Deep copy----");
console.log();
objectDeepCopy.palce = "pala"

console.log(emp1);
console.log(objectDeepCopy);


 //deep copy object method 2

 let spreadObjectDeepcopy = {...emp1}

 spreadObjectDeepcopy.country = "india"

 console.log();

 console.log("-----Deep obj spread----");
 
 console.log(emp1);
 
 console.log(spreadObjectDeepcopy);
 