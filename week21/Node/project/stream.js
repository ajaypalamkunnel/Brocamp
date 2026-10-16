const fs = require('fs')

const readableStream = fs.createReadStream('note.txt','utf-8')


readableStream.on('data',(chunk)=>{
    console.log('Reading chunk',chunk);
    
})

readableStream.on('end',()=>{
    console.log('File reading completed');
})



readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
  });