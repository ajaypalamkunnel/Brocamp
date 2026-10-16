// const person = { name: "Alice", age: 30, city: "Wonderland" };

// // for(let data in person){
// //     console.log(`${data} --- ${person[data]}`);
    
// // }


// person.foreach((data)=>{
//     console.log(data);
    
// })

// (function() {
//     console.log('This is an IIFE');
//   })();

// const obj={
//     a:"one",
//     b:'two',
//     a:'three'
// }

// console.log(obj);


// function fu(){
//     console.log(this);
   
// }

// //fu()

// const myob ={
//    fun:function fu(){
//     console.log(this);
   
// }

// }


// myob.fun()



const obj={
    a:"one",
    b:'two',
    a:'three',
    date: new Date()
}



for(let i in obj){
    console.log(obj[i]);
    
}