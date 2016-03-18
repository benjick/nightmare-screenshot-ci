'use strict';

const env = process.env;
const fetch = require('node-fetch');

console.log('Triggered if Travis wins');

if (env.TRAVIS_PULL_REQUEST) {
  console.log('This is a pull request');
  const url = `https://api.github.com/repos/${env.TRAVIS_REPO_SLUG}/pulls/${env.TRAVIS_PULL_REQUEST}/comments`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${env.GITHUB_TOKEN}`,
    },
    body: {
      'body': 'Nice change',
      'in_reply_to': 1
    },
  })
	.then(function(res) {
		return res.json();
	}).then(function(json) {
		console.log(json);
	}).catch(function(err) {
    console.log(err);
  });
}
