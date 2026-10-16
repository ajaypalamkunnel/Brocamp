const {parentPort} = require("worker_threads")


function heavyFuntion(){
    let sum = 0;  
    for(let i = 0;i < 1e9;i++){
        sum+=i
    }
    return sum
}

let res = heavyFuntion()

parentPort.postMessage(res)