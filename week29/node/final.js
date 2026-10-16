const fs = require('fs')
const {fork} = require('child_process')


fs.writeFile("example.pdf","sample data",(err)=>{
    if(err){
        console.log(err)
    }

    console.log("file created");
    
})


fs.readFile("example.pdf","utf-8",(data,err)=>{
    if(err){
        console.log(err)
    }

    if(data){
        console.log(data);
        
    }
})

const child = fork('./child.js')


child.send('start')

child.on('message',(sum)=>{
    console.log("sum : ",sum)
})

console.log("hellooo");
