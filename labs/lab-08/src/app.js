'use strict';

// Load Node requirements
const http = require('http');
const cowsay = require('cowsay');

// Load local requirements
const parser = require('./lib/parser.js');

const requestHandler = (request, response) => {
  console.log(`${request.method} ${request.url}`);

  console.log(request.headers);

  parser(request)
    .then(request => {

      // Helper Function to make response more DRY
      function setResponse(content, type, code, message) {
        response.setHeader(content, type);
        response.statusCode = code;
        response.statusMessage = message;
      }

      // GET REQUEST
      if (request.method === 'GET' && request.parsed.pathname === '/') {
        setResponse('Content-Type', 'text/html', 200, 'OK');

        response.write(`<!DOCTYPE html><html><head><title>cowsay</title></head><body><header><nav><ul><li><a href="/cowsay"><h2>cowsay</h2></a></li></ul></nav></header><main></main></body></html>`);

        response.end();
        return;
      }

      else if (request.method === 'GET' && request.parsed.pathname === '/cowsay') {
        setResponse('Content-Type', 'text/html', 200, 'OK');

        response.write(`<!DOCTYPE html><html><head><title>cowsay</title></head><body><h1>cowsay</h1><pre>${cowsay.say({ text: request.query.text })}</pre></body></html>`);

        response.end();
        return;
      }

      // POST REQUEST

      else if (request.method === 'POST' && request.parsed.pathname === '/api/cowsay') {
        setResponse('Content-Type', 'text/html', 200, 'OK');

        response.write(`{"content": "${cowsay.say({ text: request.body.text })}"}`);
        response.end();
      }

      else if (request.method === 'POST' && request.parsed.pathname === '/api/cowsay') {
        setResponse('Content-Type', 'text/html', 404, 'Not Found');

        response.write('Resource Not Found');
        response.end();
      }

    })
    .catch(err => {
      response.writeHead(500);
      response.write(err);
      response.end();
    });
};

// Server callback
const app = http.createServer(requestHandler);

// Methods to START and STOP teh server
module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
};
