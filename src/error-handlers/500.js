'use strict';

function throw500(err, req, res, next) {
  res.status(500).send('error');
}

module.exports = throw500;
