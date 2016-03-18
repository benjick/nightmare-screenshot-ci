/*'use strict';

const server = require('../server.js');
const fetch = require('node-fetch');

require('mocha-generators').install();
process.setMaxListeners(0);

describe('Tests', function() {
  this.timeout(15000);

  let nightmare;
  let newServer;

  beforeEach(function() {
    newServer = server.start(port)
    nightmare = Nightmare();
  });

  afterEach(function * () {
    yield nightmare.end();
    server.stop(newServer);
  });

  it("Can be accessed with fetch", function * () {
    const page = yield fetch(url)
    .then(function(res) {
      return res.text();
    })
    expect(page).to.not.equal('');
  });
});*/
