var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function (){
	console.log('监听器 listener1 执行。');
}

//监听器2
var listener2 = function(){
	console.log('监听器2 listener2 执行。');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听链接事件');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1 不再监听。');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听链接事件');

console.log('程序执行完毕')

