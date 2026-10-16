const fs = require("fs");
function createFile() {
  fs.writeFileSync("example.txt", "Hello this example file", (err) => {
    if (err) return console.error(err);
    console.log("File written successfully!");
  });
}

function appendFile() {
  fs.appendFile("example.txt", "\nThis is appended text", (err) => {
    if (err) return console.error(err);
    console.log("Content appended!");
  });
}

function createFolder() {
  fs.mkdir("src", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("All directories created!");
  });
}
module.exports = { appendFile, createFile,createFolder };
