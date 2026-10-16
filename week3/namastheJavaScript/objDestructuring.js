const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345'
    },
    hobbies: ['Reading', 'Running', 'Gaming'],
    
};

//const {firstName,lastName,age,email,address:{street,city,state,postalCode},hobbies:[]}=person
// console.log(person.age);
// let person2 = Object.assign({},person);

// person2.age = 50;
// console.log(person.age);
// console.log(person2.age);







let person3 = {...person}
person3.age=100

console.log(person);
console.log(person3);



// console.log(firstName, state,);

// console.log(person.greet());
//console.log(person.address);

// Object.keys(person).forEach(key => {
//     console.log(`${person[key]}`);
// });