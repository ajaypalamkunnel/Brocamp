

const {Worker} = require('worker_threads')



const worker = new Worker("./worker.js")

worker.postMessage(10)

setTimeout(()=>{
    
    for(let i = 0 ;i < 10;i++){
        console.log(i);
        
    }
},1000)

worker.on('message',(mesg)=>{
    console.log(`result from worker ${mesg} `);
})