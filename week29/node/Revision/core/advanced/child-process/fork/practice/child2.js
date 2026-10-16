


process.on("message",(msg)=>{

    let sum = 0
    if(msg==="start"){
        
        for(let i = 0 ; i < 1e9;i++){
            sum+=i
        }

        process.send(sum)

    }
})