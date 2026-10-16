const { Transform } = require('stream')
const fs = require('fs')
const uppeCaseTransform = new Transform({
    transform(chunk,encoding,callback){
        const upperChunk = chunk.toString().toUpperCase();
        callback(null,upperChunk)
    }
})


const readStream = fs.createReadStream('./largeFile.txt','utf-8')
const writableStream = fs.createWriteStream('./upper.pdf')


readStream.pipe(uppeCaseTransform)
    .pipe(writableStream)
    .on('finish',()=>{
        console.log('File has been transformed and written to upper.txt');
    })


