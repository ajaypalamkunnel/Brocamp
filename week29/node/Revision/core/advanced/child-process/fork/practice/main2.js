const {fork} = require('child_process')

const child = fork('./child2.js')

child.send("start")

child.on("message",(result)=>{

    console.log("returned result : ",result)

})