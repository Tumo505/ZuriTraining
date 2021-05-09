const http = require('http');
const fs = require('fs');


// Create ReadStream
// const dataReadStream = fs.createReadStream(`${__dirname}/data.json`, 'utf8');

// Write Stream
// const dataWriteStream = fs.createWriteStream(`${__dirname}/write.txt`,);

// // Read Stream
// dataReadStream.on('data', (chunk) => {
//     console.log('new chunk received!');
//     console.log(chunk);



//     // Write stream
// dataWriteStream.write(chunk)
// })

// PIPE
// dataReadStream.pipe(dataWriteStream)

// SEND PIPE STREAM TO CLIENT
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const dataReadStream = fs.createReadStream(`${__dirname}/data.json`, 'utf8');
    dataReadStream.pipe(res);
});

// listen
server.listen(5000, 'localhost', () => {
    console.log("Now listening on port 5000")
});

