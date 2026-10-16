


process.on("message",(msg)=>{
    console.log("I am started");
    
    if(msg === "start heavy tasks"){

        let sum = 0
        for(let i = 0 ; i < 1e9;i++){
            sum+=i
        }
        process.send(`Sum is ${sum}`)
    }

})