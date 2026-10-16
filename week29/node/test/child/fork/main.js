

const {fork} = require("child_process")


const child = fork("./child.js")

child.send("start")

child.on("message",(res)=>{
    console.log("child process reslt",res);
    
})

console.log("main process");

