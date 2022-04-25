# Nodejs-architecture

Code snippets wich demonstrates the nodejs architecture: the event loop and the thread pool how they works.

- nodejs uses the libuv library for I/O intensive operations and CPU intensive operations.
- the uses of this libuv
  - DNS resolution
  - fileSystem : asynchronous fileSystem tasks , the event loop handles the synchronous tasks of fileSystem
  - crypto library : encryption and hashing
  - compression
