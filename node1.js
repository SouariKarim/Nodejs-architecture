const http = require('http');
const server = http.createServer((res, res) => res.end('hello there!!'));

server.listen(1337);
console.log('the server listening');

// this is going to use the main thread (event loop ) to execute
// this is networking : networking uses the event loop to execute
// network operations always always uses the main thread except for DNS operations wich uses the thread pool.
