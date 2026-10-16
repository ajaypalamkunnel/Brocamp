

const cluster = require("cluster")
const os = require("os")
const http = require("http")

const cpus = os.cpus().length


if(cluster.isMaster){

    for(let i = 0 ;i < cpus;i++){
        cluster.fork()
    }


}else{

    console.log(`worker :${process.pid}`);
    

    http.createServer((req,res)=>{
        res.write("proces.id :",process.pid)
        res.end()
    })




}

