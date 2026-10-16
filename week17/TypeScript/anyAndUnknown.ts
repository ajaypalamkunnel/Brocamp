// let setup:any = "ajay"

// // setup=889

// console.log(setup.toUpperCase());



// let valueUnknown: unknown;

// valueUnknown = "Hello, TypeScript"; // Valid
// // valueUnknown = 42;                  // Valid
// // valueUnknown = true;                // Valid

// // Type checking required before usage
// // console.log(valueUnknown.toUpperCase()); // Error: Object is of type 'unknown'.
// console.log(valueUnknown);

// if (typeof valueUnknown === "string") {
//   // Safe to use after type checking
//   console.log(valueUnknown.toUpperCase());
// }

// // Using type assertion
// console.log((valueUnknown as string).toUpperCase()); // Works if valueUnknown is actually a string.








// let my_number: unknown = 12345

// console.log('my_number value is: ', my_number)

// let num: number = <number>my_number

// console.log('typeof num is: ', typeof num)


// interface info {
//     name: string
//     value: string
//  }


//  let myinfo = <info>{}

//  myinfo.name='ajay'




//  console.log(myinfo);
 





type myName = string | number


