let http = require("http")
let fs = require("fs")
let myEmitter = require('events')


http.createServer((req,res)=>{
    res.setHeader('content-Type','text-HTML')
    res.sendFile("This is server response from http")
    
    
})

.listen('8080',()=>{
    console.log("Server is running on port 8080");
    
})

const emi = new myEmitter

emi.on('eve',()=>{
    console.log("Event emittingggggggg");   
})


emi.emit('eve')

fs.writeFile('file1.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File created and data written!');
  });

fs.readFileSync("example.txt","utf-8",(err,data)=>{
    if(err){
        console.log("File reading error");
        
    }else{
        console.log("Readed data : "+data);
        
    }
})

// fs.rename("sample.txt","newname.txt",(err)=>{
//     console.error(err)
// })

fs.mkdir("sample",(err)=>{
    console.log("error occur directory creation");
    
})



const readableStream  = fs.createReadStream("./example.txt",{
    encoding: "utf-8"
})

const writeableStream = fs.createWriteStream("./file1.txt");

readableStream.on("data",(chunk)=>{
    console.log(chunk)
    writeableStream.write(chunk)
})