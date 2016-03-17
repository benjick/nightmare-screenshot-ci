const express = require('express');
const app = express();

app.use(express.static('src'));

module.exports = {
  start: function(port) {
    return app.listen(port, function () {
      console.log(`Running on port ${port}`);
    });
  },
  stop: function(server) {
    server.close();
  }
}
