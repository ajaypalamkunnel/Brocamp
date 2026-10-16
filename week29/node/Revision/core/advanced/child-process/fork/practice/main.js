const { fork } = require("child_process")


const child = fork("./child.js")

child.send("start")


child.on("message",(result)=>{

    console.log("child returned result : ",result);
    

})


