
const {parentPort} = require('worker_threads')


parentPort.on('message',(num)=>{

    let sum = 0

    for(let i = 0 ; i < num*1e9;i++){
        sum += i
    }

    parentPort.postMessage(sum)
})