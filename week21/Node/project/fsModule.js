const { error } = require('console')
const fs = require('fs')

let data = 'lorem hoithis is good book '

fs.writeFile('note.txt',data,(err)=>{
    if(err){
        console.error('Error writing to the file:', err);
        return 
    }

    console.log('File creawted successfully')
})


fs.readFile('note.txt','utf-8',(err,data)=>{
    if(err){
        console.error('Error reading the file:', err);
        return
    }

    console.log('File contents:', data);
    
})