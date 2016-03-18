'use strict';

const server = require('../../server.js');

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

  afterEach(function * (done) {
    yield nightmare.end();
    server.stop(newServer);
  });

  it("Can take screenshot of startpage", function * () {
    const title = yield nightmare
      .wait(1000)
      .goto(url)
      .Screenshot.take('widescreen', 1920, 1080)
      .Screenshot.take('mobile', 480, 640)
      .title();
    expect(title).to.not.equal('');
  });
});
