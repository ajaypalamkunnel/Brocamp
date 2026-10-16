


process.on("message",(arg)=>{


    if(arg==="start"){

        let sum = 0

        for(let i = 0 ; i < 1e9 ;i++){
            sum+=i
        }
        process.send(sum)
    }

})