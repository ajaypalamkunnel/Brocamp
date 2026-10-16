const fs = require("fs");

let data = `When file is a filename, asynchronously writes data
 to the file, replacing the file if it already exists. data can 
 be a string or a buffer.`;

fs.writeFile("newFile.pdf",data,(err)=>{

    if(err){
        throw new Error(err)
    }

    console.log("File created successfully")
});


fs.stat("newFile.pdf",(err,stat)=>{
    if(err){
        throw new Error(err)
    }

    console.log(stat.isFile())
})


let readStream = fs.createReadStream("newFile.pdf")

let writeStream = fs.createWriteStream("")