const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data); // served asynchronously
        });
    }
}).listen(2300);
console.log("Server is running at http://localhost:2300");