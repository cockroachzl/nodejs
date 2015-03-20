var http = require('http');
var server = http.createServer(function (request, res) {
    console.log( request );
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
//console.log('Listening on port %d', server.address.address().port);
