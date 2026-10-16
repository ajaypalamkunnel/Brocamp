const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')
const EventEmitter = require('events')
const { log } = require('console')
const { rejects } = require('assert')
const eventEmitter = new EventEmitter()


http.createServer((req,res)=>{


    res.writeHead(200,{'content-type':'text/html'})

   
    res.end('<h1>Heloooo</h1>')
})
.listen(8000,()=>{
    console.log("server is running on port 8000");
})


//os
// let now = new Date();



// fs.writeFile('data.txt',now,(err)=>{
//     if(err){
//         console.log("data write failed");
//     }
// })


fs.appendFile('data.txt',"this data appedeed int the data.txt file ",(err)=>{
    if(err){
        console.log("can't append ddata");
        
    }console.log("data appended");
})
const writeableStream = fs.createWriteStream('write.txt');


writeableStream.write('server is running on port 8000 this  the sample data restarting due to changes')

fs.readFile('data.txt','utf8',(err,data)=>{
    if(err){
        console.log('cant get data');
    }else{
        console.log(data);
    }
})

const resolvedPath=path.resolve('home','user','demo.txt');
console.log(resolvedPath);


console.log(path.parse(resolvedPath));



// //os

// const platForm=os.platform();
// console.log(platForm);
// const cpu = os.cpus()
// console.log(cpu.length);

// console.log(os.userInfo());

// console.log(os.uptime()/3600);
// console.log(os.homedir())


// //events
// eventEmitter.on('greet', ()=>{
//     console.log("hello nammasthe");
// })

// eventEmitter.once('onceGreet',()=>{
//     console.log("this is once greet")
// })

// eventEmitter.emit('greet')

// eventEmitter.emit('onceGreet')

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const status = true;
//         if(status){
//             resolve("successfully promise");
//         }else{
//             reject("failed promise")
//         }
//     },2000)
// })

// myPromise.then((message)=>{
//     console.log("succes "+ message);
// }).catch((error)=>{
//     console.log("Failed "+ error);
// })



// // async function fetchUser() {
// //     try {
// //       // Wait for the fetch operation to complete
// //       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
// //       // Wait for the response to be converted to JSON
// //       const user = await response.json();
// //       console.log('User fetched:', user);
// //     } catch (error) {
// //       console.log('Error fetching user:', error);
// //     }
// //   }
  
// //   // Call the async function
// //   fetchUser();


// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {

//             const data = {name:"ajay",age:20}

//             resolve(data)
            
//         }, 2000);
//     })
// }



// async function displayData(){
//     console.log("featching data...");

//     try{

//         const data = await fetchData();
//         console.log("data received = name:"+ data.name);

//     }catch (error){
//         console.log("error "+error);
//     }
// }

// displayData();

// console.log("directory : "+__dirname);

// console.log("directory : "+__filename);



// eventEmitter.on('greeter',()=>{
//     console.log("hello ajay good morning");
// })

// eventEmitter.emit('greeter')

// console.log(new Date);


const reading = fs.createReadStream('data.txt','utf8')

reading.on('data',(chunk)=>{
    console.log("receive data: "+chunk);
})

reading
