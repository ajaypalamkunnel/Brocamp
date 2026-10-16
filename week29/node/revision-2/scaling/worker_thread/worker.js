
const {parentPort} = require('worker_threads')


parentPort.on("message",(arg)=>{
    console.log("work started");
    
    let res = 0;
    for(let i = 0 ; i < arg*1e9;i++){
        res+=i
    }

    parentPort.postMessage(res)
})