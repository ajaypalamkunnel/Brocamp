function getName(){
    console.log(this.name);
    console.log(this.age);
    
}


let person1 = {
    name:"ajay",
    age:12
}
let person2 = {
    name:"Silpa",
    age:10
}

//person object bind to the method getname fundction => object
getName.call(person1)
getName.apply(person2)
//both this call function automaticallyu


const returnBind = getName.bind(person1)

returnBind()


// function getName(city, country){
//     console.log(this.name);  // "Ajay" or "Silpa"
//     console.log(this.age);   // 12 or 10
//     console.log(city);       // "Kochi" or "Mumbai"
//     console.log(country);    // "India"
// }

// let person1 = {
//     name: "Ajay",
//     age: 12
// }
// let person2 = {
//     name: "Silpa",
//     age: 10
// }

// // Using apply with arguments passed as an array
// getName.apply(person1, ["Kochi", "India"]);  // `this` is person1, args are passed as array
// getName.apply(person2, ["Mumbai", "India"]); // `this` is person2, args are passed as array

