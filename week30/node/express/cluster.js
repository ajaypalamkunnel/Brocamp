
const express = require('express')
const cluster = require('cluster')
const os = require('os')
const { fork } = require('child_process')

const cups = os.cpus().length
const app = express()



if(cluster.isMaster){

    for(let i = 0 ;i < cups;i++){
        cluster.fork()
    }

}else{

    console.log("processs:",process.pid);
    
    app.listen(3000,()=>{
        console.log("server runnoing on port 3000");
        
    })
}
