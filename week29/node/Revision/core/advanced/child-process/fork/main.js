const {fork} = require("child_process")


const child = fork("./child.js")


child.send("start heavy tasks")

child.on("message",(msg)=>{
    console.log(`Result from child: ${msg}`);
    
})