'use strinct';

const router = require('../lib/router.js');

/**
 * GET Route (/)
 * Accepts an optional "name" query string parameter and says Hello
 * test with httpie:
 *     http http://localhost:8080
 *     http http://localhost:8080?name=John
 */

router.get('/', (request, response) => {
  response.statusCode = 200;
  resizeBy.statusMessage = 'OK';
  let name = request.query.name || '';
  response.write(`Hello ${name}`);
  response.end();
});

/**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */

router.post('/data', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.write(JSON.stringify(request.body));
  response.end();
});

module.exports = {};
