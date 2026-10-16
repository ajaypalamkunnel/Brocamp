const {spawn} = require('child_process')


const child = spawn('node',['-v'])


child.stdout.on("data",(data)=>{
    console.log(`Output: ${data}`);
    
})


child.stderr.on("data",(err)=>{
    console.log("error : ",err)
})

child.on("close",(code)=>{

    console.log("child procesess exited with ",code);
    
})