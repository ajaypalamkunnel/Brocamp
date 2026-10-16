

const {Worker} = require('worker_threads')


const worker = new Worker('./worker.js')


worker.on("message",(data)=>{

    console.log("worker data : ",data)
})

worker.on("error",(err)=>{
    console.log("Error :",err);
    
})