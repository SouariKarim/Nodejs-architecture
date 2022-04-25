const http = require('http');
const fetch = require('node-fetcher');
const server = http.createServer((req, res) => {
  fetch('https://google.com') // this is a dns query : thread pool
    .then((a) => a.text()) // networking operation : event loop
    .then(console.log); // networking operation : event loop

  res.end('hello there !!'); // network operation : event loop
});

server.listen(1337);
console.log('server listening');

// in this case nodejs with use a combination of both event loop and the thread pool
// the fetch operation is a dns query so the thread poll will handle that
// the other networking operations will be handled by the event loop
