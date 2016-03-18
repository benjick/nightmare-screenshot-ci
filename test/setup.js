global.Nightmare = require('nightmare');
global.expect = require('chai').expect;

global.port = 3033;
global.url = `http://localhost:${port}`;

require('./e2e/actions/screenshot.js');
