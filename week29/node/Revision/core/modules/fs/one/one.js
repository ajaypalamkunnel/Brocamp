const fs = require('fs')



fs.readFile('./input.txt',"utf-8",(err,data)=>{

    if(err){
        console.log("file reading err: ",err);
    }

    if(data){
       let lines = data.split('\n').length

       console.log(lines)
       let inputData = `Number of line ${lines}`
       fs.writeFile('./output.txt',inputData,(err)=>{
        if(err){
            console.log("Error writing file : ",err.message);
            return
        }
         console.log(`Successfully counted ${lines} lines and wrote to output.txt`);
       })
    }




})