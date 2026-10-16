const http = require('http')



const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'})
    res.write('!welcome')
    res.end()
})

server.listen(7000,()=>{
    console.log('Server running on http://localhost:7000');
    
})
