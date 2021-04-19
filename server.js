const http = require('http');

// create server
const server = http.createServer(function(req, res) {
    // Headers
    res.writeHead(200, { 'Content-Type': 'text/html' });


    // response
    res.end(`
    <html>
    <body style="text-align: center;">
        <h1>Hello Tumo,</h1>
        <h2>Welcome to Zuri Training</h2>
    </body>
    </html>
    `);

});

server.listen(4000, '127.0.0.1');

console.log("connected to server!!")