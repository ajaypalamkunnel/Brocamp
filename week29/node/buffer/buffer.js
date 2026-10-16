const fs = require('fs')

const imageBuffer = fs.readFileSync("example.png")

console.log(imageBuffer);
console.log('Buffer Length:', imageBuffer.length);


const base64Image = imageBuffer.toString('base64')
const dataUri = `data:image/jpeg;base64,${base64Image}`;
// console.log(dataUri);