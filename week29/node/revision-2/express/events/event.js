
const {EventEmitter} = require('events')

 const emmiter = new EventEmitter()


emmiter.on('greet',(name)=>{

    console.log(`Good morning ${name}`);
    
})

emmiter.on('error',(err)=>{
    console.error('❌ Error caught:', err.message);
    
})

module.exports = emmiter