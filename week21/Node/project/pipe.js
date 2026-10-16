const fs = require('fs')



const readableStream = fs.createReadStream('text.txt')

const writableStream = fs.createWriteStream('output.txt')

readableStream.pipe(writableStream)

