const {Worker} = require("worker_threads")

const worker = new Worker("./worker.js")

worker.on("message",(result)=>{
    console.log('Result from worker thread:', result);
})

worker.on("error",(err)=>{
    console.log('Worker error:', err);
    
})

worker.on("exit",(code)=>{
    if(code!==0){
        console.log(`Worker exited with code ${code}`);
        
    }
})