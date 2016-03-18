'use strict';

const server = require('../server.js');
const fetch = require('node-fetch');
const port = 3033;
const url = `http://localhost:${port}`;

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

  it("can take screenshot of startpage", function * () {
    const title = yield nightmare
      .goto(url)
      .Screenshot.take('widescreen', 1920, 1080)
      .Screenshot.take('mobile', 480, 640)
      .title();
    expect(title).to.not.equal('');
  });
});
