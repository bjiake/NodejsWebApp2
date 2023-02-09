'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const fs = require('fs');
var newStudent = new student();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8 '});
    const stream = fs.createReadStream('./index.html')
    stream.pipe(res)
}).listen(port);
