const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./http.js', console.log); // this is an asynchronous task executed by the thread pool
  res.end('hello there !!');
});

server.listen(1337);
console.log('server listening');

// the fs.readFile function is asynchronous fo the thread pool handle this task because it is heavy on the event loop
