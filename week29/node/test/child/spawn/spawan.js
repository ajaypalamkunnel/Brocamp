const {spawn} = require("child_process")

let ls = spawn("node ",['-v'])

ls.stdout.on("data",(data)=>{
     console.log(`Output: ${data}`);
})

ls.stderr.on("data",(err)=>{
     console.log(`error: ${err}`);
}
)


ls.on("exit",(code)=>{
     console.log(`Child process exited with code ${code}`);
})