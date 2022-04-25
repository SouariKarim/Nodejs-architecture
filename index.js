// The cluster module provides a way of creating child processes that runs simultaneously and share the same server port.
// Node.js runs single threaded programming, which is very memory efficient, but to take advantage of computers multi-core systems, the Cluster module allows you to easily create child processes that each runs on their own single thread, to handle the load.

const cluster = require('cluster');
if (cluster.isMaster) {
  console.log(`master process ${process.pid} started`);

  const cpuCount = require('os').cpus().length;
  console.log('cpuCount :' + cpuCount);

  for (let i; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.end('hello there !!');
  });

  server.listen(1337);
  console.log('server listening on port');
}
