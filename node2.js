const http = require('http');
const server = http.createServer((req, res) => {
  console.log('request delivered !!!');
  while (1);
  res.end('hello there!!');
});

server.listen(1337);
console.log('server listening on port 1337');

// the while loop is blocking the main thread(event loop)
// the request is delivered to the server but there is no response because the event loop is blocked
