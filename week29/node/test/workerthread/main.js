
const {Worker} = require('worker_threads')


console.log("I am main thread");


const worker = new Worker("./worker.js")


worker.on("message",(res)=>{

    console.log("Result given by worker :",res);
    
})


worker.on("error",(err)=>{
    console.log("errror occred",err);
})

worker.on("exit",(exitcode)=>{

    console.log("worker thread excide with",exitcode);

})