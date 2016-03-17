'use strict';

const server = require('../server.js');

require('mocha-generators').install();
process.setMaxListeners(0);

describe('Take screenshot', function() {
  this.timeout(150000);
  const port = 3033;
  const url = `http://localhost:${port}`;

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

  it("of startpage", function * () {
    const title = yield nightmare
      .goto(url)
      .Screenshot.take('widescreen', 1920, 1080)
      .Screenshot.take('mobile', 480, 640)
      .title();
    expect(title).to.not.equal('');
  });
});
