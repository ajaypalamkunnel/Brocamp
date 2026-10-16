const { fork } = require("child_process")

const child = fork('./child.js')

const child1 = fork('./child.js')

child.send('start')

console.log(child.pid);
console.log(child1.pid);

console.log(process.pid);



child.on('message',(res)=>{

    console.log(`Result frim child ${res}`);
    
})

