const { exec } = require('child_process')


exec("node -v",(err,stdout,stderr)=>{


    if(err){
        console.log("error in exection : ",err);
    }
    if(stderr){
        console.log(" std error in exection : ",stderr);
    }


    if(stdout){
        console.log("readed data : ",stdout);
        
    }



})