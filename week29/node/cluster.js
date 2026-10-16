const cluster = require('cluster')
const os = require('os')
const http = require('http')

const numCPUs = os.cpus().length




if(cluster.isMaster){

    console.log(`Master ${process.pid} is runnig`);
    

    for(let i = 0 ; i < numCPUs-4;i++){
        cluster.fork()
    }

    cluster.on('exit',(worker,code,signal)=>{
         console.log(`Worker ${worker.process.pid} died`);
    })

}else{
      // Child process
  console.log(`Worker ${process.pid} started`);

  // Create an HTTP server in each child process
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, Node.js!');
  }).listen(8000);

  console.log(`Worker ${process.pid} is listening on port 8000`);
}