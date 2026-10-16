const {Worker} = require('worker_threads')


const worker = new Worker('./taskp.js')
 

worker.postMessage(10)

worker.on('message',(message)=>{
    console.log("Reusult from worker",message);
    
})


