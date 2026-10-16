

const {EventEmitter} = require("events")


const myEmitter = new EventEmitter()


myEmitter.on("greet",(wish,name)=>{

    console.log(`${wish} ${name}`);

})

myEmitter.emit("greet","gud mrng","Ajay")