
const {exec} = require('child_process')


exec('node -v',(err,data,sterr)=>{

    if(sterr){
        console.log(sterr);
        
    }

    if(err){
        console.log(err);
        
    }


    if(data){
        console.log("node version : ",data);
        
    }
})