const fs = require("fs")



fs.readFile("text.pdf","utf8",(err,data)=>{

    if(err){
        console.log(("error : ",err));
        
    }

    console.log(data)

})