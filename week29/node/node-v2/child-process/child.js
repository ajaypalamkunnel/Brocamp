


process.on('message',(msg)=>{


    console.log(`child recevied : ${msg}`);

    let result = 0

    for(let i = 0 ; i < 1e9;i++)result += i

    process.send(`Result is ${result}`)
    


})