const {exec} = require('child_process')


exec('node -v',(error,data,stderr)=>{


    if(error){
        console.log(`Error ${error.message}`);
        return
    }


    if(stderr){
        console.log(`stderr ${stderr}`);
        return
    }


    if(data){
        console.log(`node version : ${data}`);
    }

})