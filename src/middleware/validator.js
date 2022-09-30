'use strict';

function validator(request, response, next) {
  if (request.query.name)
    next();
  if (!request.query.name)
    next('No name on request');
}

module.exports = validator;
