
// //ith simple example for promise
// // let p1 = new Promise((resolve,reject)=>{
// //     resolve();
// // })

// // p1.then(()=>{
// //     console.log("promiss successs");
// // }).catch(()=>{
// //     console.log("promiss reject");
// // })



                                
// // callback real exampled
// let posts = [
//     { id: 1,title:"intro" },
//     { id: 2,title:"chap1" }
// ];


// const getPost = ()=>{
   
//         let lis =[];

//     setTimeout(()=>{

//         posts.forEach(post=>{
//         lis.push(`post is ${post.id} title is ${post.title} `) 
//         }) 
//         for(let i of lis){
//             console.log(i);
//         }

//     },2000)
  
// }


// const addPost=(post)=>{

//     return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         posts.push(post);

//         let err = true;
//         if(err){
//             reject()
//         }else{
//             resolve()
//         }
        
//     },2000)
// })  


// }


// addPost({id: 3,title:"chapter 2"})
// .then(getPost).catch(()=>{
//     console.log("error occured");
// })
 


// let mypro = new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         let is = true

//         if(is){
//             resolve("success");
//         }else{
//             reject("failed")
//         }

//     },2000)
// })

// mypro.then((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// })


// var a=0;
// function add(num){
//     a= a+num;
//     return a
// }

// console.log(add(10));
// console.log(add(10));



// var a;

// console.log(a);


 
const fetchData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success = true;
        if(success){
            const date = {name:"ajay",age:20}
            resolve(data)
        }else{
            reject("Failed to fetch data")
        }

    },2000)
})

fetchData
.then((res)=>{
    console.log(`Name: ${res.name} Age: ${res.age}`);
    return res.age
})
.then((age)=>{
    console.log(`In 5 years you will be ${age} years old.`);
    
})
.catch((err)=>{
    console.error(`Error : ${err}`)
})