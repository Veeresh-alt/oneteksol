//console.log(module);

const logger = require('./third');
const  path = require('path')
const os = require('os');
 const fs = require('fs');

const files = fs.readdirSync('./')
console.log(files);


fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

var pathObj = path.parse(__filename)
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory:' + totalMemory)
// template string
// es6 / es2015:ECMAScript 6
console.log(pathObj);
logger.log('message')


console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);