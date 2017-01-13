var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//创建一个写入流
var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log('end end end end');