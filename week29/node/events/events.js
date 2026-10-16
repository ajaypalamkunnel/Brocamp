const EventEmitter = require('events')
const fs = require('fs')
const emitter = new EventEmitter()


emitter.on("greet",(name)=>{
    console.log(`Hello, ${name}!❤️`);  
})

emitter.on("cfs",(fileName,content)=>{
    fs.writeFile(fileName,content,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(`${fileName} created..`);  
    })
})

module.exports = emitter