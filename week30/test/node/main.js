
const  {Worker} = require('worker_threads')


const worker = new Worker("./worker.js")


worker.on("message",(res)=>{
    console.log("Result from worker",res)
})

worker.on("error",(err)=>{
    console.log("error from worker",err)
})