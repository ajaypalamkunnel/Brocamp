const stream = require("stream")
const fs = require("fs")



const readStream = fs.createReadStream("newFile.pdf","utf-8")
const writeStream = fs.WriteStream("stremData.pdf")

readStream.on('data',(data)=>{
    console.log('Received chunk:', data);
})

readStream.on("end",()=>{
    console.log("finished reading..");
    
})


readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

readStream.pipe(writeStream)
