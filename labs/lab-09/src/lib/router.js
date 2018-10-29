'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

// Routing Table
router.routes = {};

// REST Verbs we will accept
const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach((method) => {
  // create a new "http method" in the routing table
  router.routes[method] = {};

  router[method.toLowerCase()] = function (path, callback) {
    router.routes[method][path] = callback;
  };
});

router.route = (request, response) => {
  console.log(`\n=========================\n${request.method} ${request.url}\n=========================`);

  return parser(request)
    .then(request => {
      // Find the function connected to the path
      let handler = router.routes[request.method][request.parsed.pathname];

      // run the function if it's there
      if (handler) {
        return handler(request, response);
      }
    })
    // Throw an error if there is not one there
    .catch(err => {
      console.log('NOT FOUND', request.parsed.pathname);
      response.status = 404;
      response.statusMessage = 'Not Found';
      response.write(`Resource Not Found (${request.parsed.pathname})`);
      response.end();
    });
};