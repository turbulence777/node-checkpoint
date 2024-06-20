// file-operations.js
const fs = require('fs');

// Create welcome.txt and write "Hello Node" to it
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and data written');

    // Read data from hello.txt and log it
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
