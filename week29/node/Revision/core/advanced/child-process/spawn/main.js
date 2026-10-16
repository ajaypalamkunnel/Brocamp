const {spawn} = require("child_process")


const child = spawn('node',['-v'])


child.stdout.on("data",(data)=>{
     console.log(`Output: ${data}`);
})

child.stderr.on("data",(data)=>{
   console.error(`Error: ${data}`);
})

child.on('close',(code)=>{
    console.log(`Child process exited with code ${code}`);
})