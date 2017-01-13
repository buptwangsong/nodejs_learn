var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为uef8
readerStream.setEncoding('UTF8');

//处理流事件
readerStream.on('data',function(chunk){
	data += chunk;
});
readerStream.on('end',function(){
	console.log(data);
});
readerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('end end end');