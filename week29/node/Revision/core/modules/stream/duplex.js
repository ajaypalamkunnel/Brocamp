const { Duplex } = require('stream')



const duplexStream = new Duplex({
    read(size){
        this.push("hello from read")
        this.push(null)
    },

    write(chunk,encoding,callback){
        console.log('written ',chunk.toString());
        callback()
    }
})