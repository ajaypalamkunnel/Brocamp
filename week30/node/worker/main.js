
const {Worker} = require('worker_threads')

const worker = new Worker("./worker.js")


worker.on("message",(res)=>{
    console.log("worker Result",res)
})

worker.on("error",(err)=>{
    console.log(err);  
})