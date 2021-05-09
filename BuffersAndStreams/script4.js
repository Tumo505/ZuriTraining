const http = require('http');
const fs = require('fs');


// Create ReadStream
const dataReadStream = fs.createReadStream(`${__dirname}/data.json`, 'utf8');

// Write Stream
const dataWriteStream = fs.createWriteStream(`${__dirname}/write.txt`,);

// // Read Stream
// dataReadStream.on('data', (chunk) => {
//     console.log('new chunk received!');
//     console.log(chunk);



//     // Write stream
// dataWriteStream.write(chunk)
// })

// PIPE
dataReadStream.pipe(dataWriteStream)

