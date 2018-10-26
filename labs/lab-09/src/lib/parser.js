'use strict';

// Load Node modules
const url = require('url');
const queryString = require('querystring');

module.exports = (request) => {

  return new Promise((resolve, reject) => {

    if (!(request || request.url)) { reject('Invalid Request Object. Cannot Parse'); }

    // Parse the URL
    request.parsed = url.parse(request.url);
    /*
       req.parsed = {
         pathname: '/api/vi/notes',
         query: '?id=12345&name=John',
       }
      */

    // Parse the querystring
    request.query = queryString.parse(request.parsed.query);
    /*
      req.query = {
        id:12345,
        name:'John'
      }
     */

    // If nothing is passed to the url
    // if (request.parsed.query === null) {
    //   request.query.text = `I need something to say, Use: ?text='your text here'`;
    // }

    // POST|PUT|PATCH
    if (!request.method.match(/POST|PUT|PATCH/)) {
      resolve(request);
    }

    let text = '';

    request.on('data', (buffer) => { text += buffer.toString(); });

    request.on('end', () => {
      try {
        console.log('SUBMITTED INPUT:', text);
        request.body = JSON.parse(text);
        resolve(request);
      }
      catch (err) { reject(err); }
    });

    request.on('err', reject);

  });


};