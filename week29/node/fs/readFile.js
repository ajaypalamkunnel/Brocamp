const fs = require("fs");

function readFile() {
  fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) return console.error(err);
    console.log(data);
  });
}

function deleteFile() {
  fs.unlink("example.txt", (err) => {
    if (err) return console.error(err);
    console.log("File deleted!");
  });
}


function renameFile(newName){

  fs.rename('example.pdf',newName,(err)=>{
    if(err) throw err
    console.log('File renamed!');
    
  })

}

module.exports = {readFile,deleteFile};
