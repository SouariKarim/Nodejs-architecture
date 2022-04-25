const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFileSync('./http.js', console.log); // this is an synchronous task executed by the event pool - thisis a blocking operation
  res.end('hello there !!');
});

server.listen(1337);
console.log('server listening');

// the event loop handles the synchronous tasks
// the code and the event loop is blocked by the fs.readFileSync function until it will be completed to execute the next task
