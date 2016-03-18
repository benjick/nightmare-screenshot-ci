'use strict';

const env = process.env;
const fetch = require('node-fetch');

if (env.TRAVIS_PULL_REQUEST) {
  const url = `https://api.github.com/repos/${env.TRAVIS_REPO_SLUG}/pulls/${env.TRAVIS_PULL_REQUEST}/comments`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${env.GITHUB_TOKEN}`,
    },
    body: {
      'body': 'Nice change',
      'in_reply_to': 4
    },
  })
	.then(function(res) {
		return res.json();
	}).then(function(json) {
		console.log(json);
	});
}
