

const fs = require('fs')

const readStream = fs.createReadStream("./big.pdf")

const writeStream = fs.createWriteStream("./streamData.pdf")

readStream.pipe(writeStream)