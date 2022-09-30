'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const throw404 = require('./error-handlers/404');
const throw500 = require('./error-handlers/500');

app.use(logger);
app.use('*', throw404);
app.use(throw500);

app.get('/person', validator, (request, response) => {
  response.json({
    name: request.query.name,
  });
});

module.exports = app;
