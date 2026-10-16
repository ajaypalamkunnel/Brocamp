
const {EventEmitter} = require('events')
const fs = require('fs')

const myEmitter = new EventEmitter()
const errorEmitter = new EventEmitter()


myEmitter.on("greeting",(msg)=>{

    console.log("hello...namastheee",msg);
    

})

errorEmitter.on("error",(err)=>{
    console.log("errrr: ",err.message);
    
})

fs.readFile(".data.txt","utf-8",(err,data)=>{
    if(err){
        errorEmitter.emit("error",err)
    }

    if(data){
        console.log("readed data : ",data);
        
    }

})



myEmitter.emit("greeting","Ajay")