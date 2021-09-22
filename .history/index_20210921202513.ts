//https://nodejs.org/en/docs/guides/getting-started-guide/
//The next line change from "const http = require('http');"
import http from 'http';
import path from 'path';
import fs from 'fs';
//The next two lines change from const hostname = '127.0.0.1'; and const port = 3000;
//explicitly called for easier reading

const hostname: string = '127.0.0.1';
const port: number = 3000;

fs.readFile("index.html", (err, data) => 
{
  if (err) 
  {
    console.log("Error");
  }
  
  console.log(data);
});

//      create a server          request, response
//const server = http.createServer((req, res) =>
const server: http.Server = http.createServer((req, res) => 
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