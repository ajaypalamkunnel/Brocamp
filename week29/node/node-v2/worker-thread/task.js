
const {parentPort} = require('worker_threads')


parentPort.on('message',(num)=>{
    let result = 0

    for(let i=0 ;i < num*1e7;i++) result += i

    parentPort.postMessage(result)
})