var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为inputother.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('inputother.txt'));

console.log('end end end end');