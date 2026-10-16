

process.on('message',(msg)=>{


    if(msg === "start"){
        let res = 0
        for(let i = 0 ; i < 1e9;i++){
            res += i
        }
        process.send(`Result  ${res}`)
    }

})