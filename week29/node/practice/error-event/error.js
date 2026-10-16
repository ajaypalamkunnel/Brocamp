const EventEmitter = require("events")


const myEmitter = new EventEmitter()

myEmitter.on("error",(err)=>{
     console.error('An error occurred:', err.message);
})


function div(num){

    if(num === 0){
        myEmitter.emit("error",new Error("error orccresd"))
        return null
    }
    return 100/num

}

console.log(div(0))