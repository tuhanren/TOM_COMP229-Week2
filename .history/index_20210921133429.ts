//https://nodejs.org/en/docs/guides/getting-started-guide/
//The next line change from "const http = require('http');"
import http from 'http';
//The next two lines change from const hostname = '127.0.0.1'; and const port = 3000;
//explicitly called for easier reading
const hostname: String = '127.0.0.1';
const port: Number = 3000;

//      create a server          request, response
const server = http.createServer((req, res) => 
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// add listener with optional port and optional hostname and optional listeningListener
server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});