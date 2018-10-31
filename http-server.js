var fs = require ('fs');
var http = require('http');

// same meaning:
// var server = http.createServer();
// server.on('request', function (request, response) {

var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/url') {
        fs.readFile('./index.html', function (err, data) {
            response.write(data);
            response.end();
        });
        
    } else {
            response.statusCode = 404;
            response.write('<img src="https://image.freepik.com/darmowe-wektory/zabawny-błąd-404-projekt-tła_1167-219.jpg" alt="404">');
            response.end();
    }
});

server.listen(8080);