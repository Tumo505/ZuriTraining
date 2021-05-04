// update files

// delete files

// rename files

// create file



var fs = require('fs')


// create a new file

// fs.writeFile('firstFile.txt', 'Hello world', (err) => {
//     // if there's an error, throw error
//     if (err) throw err;
//     console.log('file created')
// })

// Append or update the file
fs.appendFile('firstFile.txt', 'Hello world \n Zuri interns \n Nodejs \n Backend dev', (err) => {
    if (err) throw err;
    console.log('file updated successfully')
})