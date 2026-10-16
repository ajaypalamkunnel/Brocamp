const {Worker} = require('worker_threads')

const worker = new Worker("./worker.js",{workerData:{name:"Ajay",age:21}})

worker.on("message",(result)=>{
    console.log(`Result from worker thread ${result}`);  
})

worker.on("error",(err)=>{
   console.log("erorr",err);    
})

