const fs = require('fs')
const {Transform} = require('stream')

const readable = fs.createReadStream('file.pdf')
const writable = fs.createWriteStream('output.pdf')


readable.pipe(writable)

//--------------------------------------------------------------

const readableStream = fs.createReadStream('file.pdf',{encoding:'utf-8'})

const upperCaseTransform = new Transform({
    transform(chunk,encoding,callback){
        const transformChunk = chunk.toString().toUpperCase()
        callback(null,transformChunk)
    }
})


const writableStream = fs.createWriteStream('upper.pdf')


readableStream
    .pipe(upperCaseTransform)
    .pipe(writableStream)
    .on('finish',()=>{
        console.log('Transformation complete. Check output.txt');
    })