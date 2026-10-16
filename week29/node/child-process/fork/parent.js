const {fork} = require("child_process")


console.log("Main app started");

const child = fork("./child.js")

child.send({limit:1e9})


child.on("message",(msg)=>{
    console.log(`Sum from child: ${msg.sum}`);
})