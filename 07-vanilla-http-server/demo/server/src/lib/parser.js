'use strict';

// First Party Modules
const url = require('url');
const queryString = require('querystring');

module.exports = (request) => {

  return new Promise((resolve, reject) => {

    if (!(request || request.url)) { reject('Invalid Request Object. Cannot Parse'); }

    // req.url = http://localhost:3000/api/v1/notes?id=12345
    request.parsed = url.parse(request.url);
    /*
        req.parsed = {
          pathname: '/api/vi/notes',
          query: '?id=12345&name=John',
        }
       */

    request.query = queryString.parse(request.parsed.query);
    /*
        req.query = {
          id:12345,
          name:'John'
        }
       */

    if (!request.method.match(/POST|PUT|PATCH/)) {
      resolve(request);
    }

    let text = '';

    request.on('data', (buffer) => {
      text += buffer.toString();
    });

    request.on('end', () => {
      try {
        request.body = JSON.parse(text);
        resolve(request);
      }
      catch (err) { reject(err); }

    });

    request.on('err', reject);

  });

};
