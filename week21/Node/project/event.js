const EventEmitter = require('events')



const eventEmitter = new EventEmitter()


eventEmitter.on('greet',()=>{
    console.log('Hello! Welcome to the event-driven world.');
    
})

eventEmitter.emit('greet')