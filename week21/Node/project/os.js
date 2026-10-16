const os = require('os')

console.log("OS =>",os.type());


console.log('Total Memory:', os.totalmem() / (1024 ** 3), 'GB');
console.log('Free Memory:', os.freemem() / (1024 ** 3), 'GB');

console.log('Hostname:', os.hostname());
