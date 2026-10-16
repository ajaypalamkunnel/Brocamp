const {fork} = require('child_process')

const child = fork('./child.js')

child.send('Start')
child.on('message',(msg)=>{
    console.log(`Message from child : ${msg}`);
    
})
