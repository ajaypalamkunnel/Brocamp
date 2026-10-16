

process.on("message",(num)=>{

    let res = 0
    for(let i = 0 ; i < 1e9 ;i++){
        res+=i*num
    }
    process.send(`Resut ${res}`)
})