const {exec,spawn,fork} = require("child_process")
const { error } = require("console")
const { stdout, stderr } = require("process")

exec("node -v",(error,stdout,stderr) => {
  if(error){
     console.error('Error:', error.message);
    return;
  }


  if(stderr){
    console.error('stderr:', stderr);
    return;
  }

  console.log('Node version:', stdout);
})


const ls = spawn('node',['-v'])

ls.stdout.on("data",(data)=>{
    console.log(`Output: ${data}`);
    
})



const child = fork('ch.js')

child.send("Hello child");
child.on('message',(msg)=>{
     console.log('Main got:', msg);
})