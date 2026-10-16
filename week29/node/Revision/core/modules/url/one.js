const {URL} = require('url')

const myURL = new URL('https://john:password123@www.example.com:8080/path/to/page?name=john&age=30#section1')


console.log("protocil",myURL.protocol);
