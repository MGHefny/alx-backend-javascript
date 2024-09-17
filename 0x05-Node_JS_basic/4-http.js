/*
 * small HTTP server
 */
const http = require('http');

const hostname = 'localhost';
const port = 1245;

const run = http.createServer((reseve, req) => {
  req.statusCode = 200;
  req.setHeader('Content-Type', 'text/plain');
  req.end('Hello Holberton School!');
});

run.listen(port, hostname, () => {
});

module.exports = run;
