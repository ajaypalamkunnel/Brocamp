

process.on('message',(msg)=>{
    console.log('child got',msg);
    process.send('Reply from child');
})