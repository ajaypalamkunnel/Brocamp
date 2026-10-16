const {exec} = require("child_process")

exec("node -v",(error,stdout,stderr)=>{


    if(error){
        console.log("error in exection : ",error);
        return
    }

    if(stderr){
        console.log("std error: ",stderr);
        return 
    }


    if(stdout){
        console.log("data : ",stdout);
        
    }



})