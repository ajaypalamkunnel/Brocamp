

const {exec} = require("child_process")

exec("node -v",(err,stdout,stderr)=>{

    if(stdout){
        console.log("data : =",stdout);
        
    }

    if(stderr){
        console.log(stderr);
        
    }

    if(err){
        console.log(err);
        
    }

})