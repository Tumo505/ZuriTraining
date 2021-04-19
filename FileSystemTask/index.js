const fs = require('fs')
const fetch = require("node-fetch")
const request = require('request');


var options = {
    url: 'http://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    accept: 'application/json',
    // json: true,
};
var path = './result/posts.json';
var ws = fs.createWriteStream(path);

// Start the request
request(options).on('error', function(error) {
    console.log(error);
}).on('close', function() {
    console.log('Done');
}).pipe(ws);