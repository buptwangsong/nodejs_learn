var fs = require('fs');
var data = '再牛逼的梦想。。。。。。。。尔等凡人还是别白日做梦了。';

//创建一个可以写入的流
var writerStream = fs.createWriteStream('output.txt');

//使用utf8写入数据
writerStream.write(data,'UTF8');

//标记文件结尾
writerStream.end();

//处理流事件
writerStream.on('finish',function(){
	console.log('写入完成。');
});
writerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('end end end');