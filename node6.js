// how to use the thread pool
// define the number of threads used by this application
process.env.UV_THREADPOOL_SIZE = 6; // the numbers of threads used by default by nodejs is 4

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./http.js', console.log);

  res.end('hello there !!');
});

server.listen(1337);
console.log('server listening on port 1337');

// define the number of threads used by this application based on what tasks are running and dealing with
// for example if your application does not deal with crypto or compression or other heavy tasks you so not have to increase the number of threads used
