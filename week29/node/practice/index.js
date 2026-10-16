
const http = require("http")


const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':"text/pain"})
    res.end("Hello guys")

})


server.listen(3000,()=>{
    console.log("server running in port 3000");
    
})