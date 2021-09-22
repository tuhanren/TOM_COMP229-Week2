//https://nodejs.org/en/docs/guides/getting-started-guide/
//The next line change from "const http = require('http');"
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

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