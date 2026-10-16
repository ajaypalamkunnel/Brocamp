

const { exec } = require('child_process')
const { stdout, stderr } = require('process')


exec('node -v',(err,stdout,stderr)=>{

    if(err){
        console.error(err);
    }

    if(stderr){
        console.log(stderr) 
    }

    if(stdout){
        console.log(`Result = ${stdout}`);
        
    }
})