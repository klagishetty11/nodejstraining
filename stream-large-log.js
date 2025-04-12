const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === "/logs"){
        const stream = fs.createReadStream("server.log");
        res.writeHead(200, {'Content-Type': 'text/plain'});
        stream.pipe(res); // Stream the log file to the response
    }else{
        res.end("try / logs");
    }
}).listen(5000);

console.log("Log Stream server at http://localhost:5000/logs");
