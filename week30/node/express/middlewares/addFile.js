
const fs = require("fs")


function generateFile(num1,num2){
    
    let sum = Number(num1)+Number(num2)
    fs.writeFile("out.pdf",sum.toString(),"utf-8",(err)=>{
        if(err){
            console.log("file creatipon error",err);
            
        }
        console.log("file created");
        
    })

}



module.exports = generateFile