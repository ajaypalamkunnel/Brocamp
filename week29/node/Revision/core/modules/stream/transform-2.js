
const fs = require('fs')
const { Transform } = require('stream')
const {promisify} = require('util')

const uppeCaseTransform = new Transform({
    transform(chunk,encoding,callback){
        const uppetString = chunk.toString().toUpperCase()
        callback(null,uppetString)
    }
})



const readStream = fs.createReadStream('./largeFile.txt')
const writeStream = fs.createWriteStream("./upperData.txt")




    
    readStream.pipe(uppeCaseTransform)
        .pipe(writeStream)
        .on("finish",()=>{
            console.log("transformation completeddd....");
            
        })

 

    fs.cp('./upperData.txt',"./cpdata.txt",(err)=>{
        if(err){
            console.log("data copy error",err);
            return
        }
    
        console.log("data copied successfill!!!!");
    
    })
    