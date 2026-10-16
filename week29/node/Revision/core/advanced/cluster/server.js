const cluster = require('cluster');
const os = require("os")
const http = require("http")

const numCPUs = os.cpus().length


if(cluster.isMaster){

    console.log(`Master process started. PID: ${process.pid}`);


    for(let i = 0 ;i < numCPUs;i++){
        cluster.fork()
    }


    cluster.on("exit",(worker,code,signal)=>{
         console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
    cluster.fork();
    })


}else{


    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plain'})
         res.end(`Hello from worker ${process.pid}\n`);
    }).listen(3000)

    console.log(`Worker started. PID: ${process.pid}`);

}