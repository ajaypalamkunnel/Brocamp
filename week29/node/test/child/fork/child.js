

process.on("message",(msg)=>{
    let res = 0
    if(msg=="start"){

        for(let i = 0 ; i < 1e9 ;i++){
            res+=i
        }
    }

    process.send(res)
})