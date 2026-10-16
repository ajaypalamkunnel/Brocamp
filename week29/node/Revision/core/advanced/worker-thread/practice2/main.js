const {Worker} = require("worker_threads")

const worker = new Worker("./worker.js")


worker.on("message",(data)=>{
    console.log("result = ",data)
})


worker.on("error",(err)=>{
    console.log("err :",err);
    
})