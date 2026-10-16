const http = require('http')


const server = http.createServer((req,res)=>{


    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.end('<h1>Home<h1>')
    }else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.end("<h1>About<h1>")
    }

})





server.listen(5000,()=>{
    console.log('Server listening on http://localhost:5000');
})