'use strict';

function throw500(err, req, res, next) {
  res.status(404).send('Not Found');
}

module.exports = throw500;
