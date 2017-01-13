var http = require('http');

http.createServer(function(req, res){
	// set the header of HTTP
	res.writeHead(200,{'Content-type':'text/plain'});

	//send the response data
	res.end('Hello World!');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');