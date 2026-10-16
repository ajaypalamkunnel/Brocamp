

const {spawn} = require("child_process")


const ls = spawn("node",["-v"])


ls.stdout.on("data",(data)=>{
    console.log(`command output: ",${data}`);
    
})

ls.stderr.on("error",(err)=>{
    console.log(err);
    
})