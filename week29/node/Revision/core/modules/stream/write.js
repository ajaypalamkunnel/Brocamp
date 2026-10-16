const fs = require("fs");

const writableStream = fs.createWriteStream("./output.txt");

const data = `ptional data to write. For streams not operating in object mode, chunk must be a {string}, {Buffer}, {TypedArray} or {DataView}. For object mode streams, chunk may be any JavaScript value other than null.


The writable.write() method writes some data to the stream, and calls the supplied callback once the data has been fully handled. If an error occurs, the callback will be called with the error as its first argument. The callback is called asynchronously and before 'error' is emitted.`;

writableStream.write(data);

writableStream.end(()=>{
    console.log("finsihs writing");
    
})
