const {fork} = require("child_process")


let child = fork("./child.js")

child.send(10)

child.on("message",(res)=>{
    console.log("calculateopm res ",res);
    
})