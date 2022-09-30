'use strict';

function logger(request, response, next) {
  console.log('Request method' + request.method, 'Request path' + request.path);
  next();
}
module.exports = logger;
