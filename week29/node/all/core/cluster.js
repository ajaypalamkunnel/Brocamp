

const http = require("http")
const os = require("os")
const cluster = require('cluster')

const cups = os.cpus().length

if(cluster.isMaster){


    for(let i = 0 ;i < cups;i++){
        cluster.fork()
    }


    cluster.on("exit",(worker,code,signal)=>{
        console.log(`worker ${worker.process.pid} died`);
    })
}else{

    http.createServer((req,res)=>{

        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end(`Hello from worker ${process.pid}\n`);
    }).listen(3000)

    console.log(`worker started with pid : ${process.pid}`);
    
}

