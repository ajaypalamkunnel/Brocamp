const {Worker} = require("worker_threads")


const worker = new Worker("./worker.js")

worker.on("message",(result)=>{
    console.log("large calclation result : ",result);
})

worker.on("error",(error)=>{
    console.log("error in the calculation: ",error);
    
})

worker.on("exit",(code)=>{
    if(code !== 0){
        console.log("worker exited with ",code);
        
    }
})