const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const readStream = fs.createReadStream("Text.txt"); // Reduces memory usage vs readFile 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    readStream.pipe(res); // Pipe the read stream to the response
}).listen(4000);

console.log("Streaming Server is running at http://localhost:4000");