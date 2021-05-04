// update files

// delete files

// rename files

// create file



const { listenerCount } = require('events');
var fs = require('fs')
var http = require('http')


// create a new file

// fs.writeFile('firstFile.txt', 'Hello world', (err) => {
//     // if there's an error, throw error
//     if (err) throw err;
//     console.log('file created')
// })

// Append or update the file
// fs.appendFile('firstFile.txt', 'Hello world \n Zuri interns \n Nodejs \n Backend dev', (err) => {
//     if (err) throw err;
//     console.log('file updated successfully')
// })


// read file
http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        if (err) throw err;
        // console.log(data);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
}).listen(5000);

