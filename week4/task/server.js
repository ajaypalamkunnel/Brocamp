const http = require('http');


let middle = function middleware(req,res,next){
    console.log("i am middle");
    res
}

middle()
    


http.createServer((req,res)=>{



})

.listen(5000,()=>{
    console.log("running 5000");
})