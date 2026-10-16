const http = require('http')
const  {createFile,appendFile, createFolder} = require('./fs/writefile')
const {readFile,deleteFile} = require('./fs/readFile')
const path = require('path')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Hello node.js")
})

const os = require('os')
const getOsdetails = require('./os/os')
const emitter = require('./events/events')




createFile()
appendFile()
readFile()
deleteFile()
createFolder()

getOsdetails()

let dir =  'http://localhost:3000/'

const fullPath = path.resolve(dir,'files','example.pdf')

console.log(fullPath);

console.log(os.platform());

console.log(os.hostname());

console.log(process.env.TZ);
emitter.emit("greet","Ajay ps")

emitter.emit("cfs", "newFile.pdf", "Hello from event emitter!");

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/'); 
})

