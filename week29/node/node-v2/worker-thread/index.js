
const {Worker} = require('worker_threads')

const worker = new Worker('./task.js')


worker.on('message',(mesage)=>{
    console.log("Result from worker : ",mesage);
    
})

worker.postMessage(10)

worker.postMessage(10000)