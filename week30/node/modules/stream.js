
const {Transform} = require("stream")
const fs = require('fs')

const upperTransform = new Transform({
    transform(chunk,encoding,callback){
        let upperData = chunk.toString().toUpperCase()
        callback(null,upperData)
    }
})


const readStream = fs.createReadStream("./cpdata.txt")
const writeStream = fs.createWriteStream("upper.pdf")

readStream.pipe(upperTransform)
    .pipe(writeStream)
    .on("finish",()=>{
        console.log("transformation completed");
        
    })