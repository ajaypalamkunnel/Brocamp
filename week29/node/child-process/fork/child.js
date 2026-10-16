

process.on("message",(msg)=>{

    const limit = msg.limit

    let sum = 0

     for (let i = 1; i <= limit; i++) {
    sum += i;
  }

  process.send({ sum });



})