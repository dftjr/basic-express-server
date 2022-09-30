'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing logger middle', () => {
  test('Should log something when invoked', () => {
    jest.spyOn(console, 'log');
    let request = {
      method: 'TEST',
      path: 'PATH',
    };
    const response = {};
    const next = jest.fn();
    logger(request, response, next);
    expect(console.log).toHaveBeenCalledWith('Request method' + request.method, 'Request path' + request.path);
  });
});
