

process.on("message",(num)=>{
    let sum = 0
    for(let i = 0 ; i < 1e9;i++){
        sum+=i
    }
    process.send(sum+num)
})