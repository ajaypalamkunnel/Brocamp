// let myarr = [3,5,2,7,5,9,8];
// let sortarray = myarr.sort();
// console.log(sortarray);
// let secondlarge = sortarray[sortarray.length-2]
// console.log(secondlarge);

// function secondLg(arr) {
//   let fl = -Infinity;
//   let sl = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if(fl<arr[i]){
//         fl=arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if(fl>arr[i] && sl<arr[i]){
//         sl = arr[i]
//     }
//   }
// return sl

// }

// let myarr = [3, 5, 2, 7, 5, 9, 8];
// let sec = secondLg(myarr);
// console.log(sec);



// const object = {a: 1, b: 2, c: 3};

// for (const key in object) {
//     console.log(object[key]);
// }

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for(let i of person){
    console.log(i);
}