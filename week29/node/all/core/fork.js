const {fork} = require("child_process")


const child = fork("./childs/fchild")

child.send(10)

child.on("message",(res)=>{
    console.log("calculation res: ",res);
    
})