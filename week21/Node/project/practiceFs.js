const fs = require('fs')


let readedData = fs.readFileSync('note.txt','utf-8')



fs.writeFile('dataFromNote.txt',readedData,(err)=>{
    if(err){
        console.log(err);    
    }
    console.log('File written successfully.');
})


