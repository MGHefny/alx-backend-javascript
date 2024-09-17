/*
 * small HTTP server
 */
const http = require('http');

const hostname = 'localhost';
const port = 1245;

const run = http.createServer((reseve, send) => {
  send.statusCode = 200;
  send.setHeader('Content-Type', 'text/plain');
  send.end('Hello Holberton School!');
});

run.listen(port, hostname, () => {
});

module.exports = run;