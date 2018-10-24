'use strict';

// Load Node modules
const url = require('url');
const queryString = require('querystring');

module.exports = (request) => {
  console.log(request);
  return new Promise((resolve, reject) => {
    if (!(request || request.url)) { reject('Invalid Request Object. Cannot Parse'); }

    // Parse the URL
    request.parsed = url.parse(request.url);
    console.log('PARSED:', request.parsed.query);

    // Parse the querystring
    request.query = queryString.parse(request.parsed.query);
    console.log('QUERY:', request.query);


    // POST|PUT|PATCH
    if (!request.method.match(/POST|PUT|PATCH/)) {
      resolve(request);
    }

    let text = '';

    request.on('data', (buffer) => { text += buffer.toString(); });

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