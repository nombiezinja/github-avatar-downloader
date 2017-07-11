var request = require('request');

console.log('Welcome to GitHub Avatar Downloader!');

var GITHUB_USER = 'Nombiezinja';
var GITHUB_TOKEN = '7e8cbab3e97fe6f54dfab6d362123fafc3afbfbb';

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors'
  // console.logu("the url is : " + requestURL);

  var requestOptions = {
    headers:{
      "user-agent":"ti"
    },
    url: requestURL
  }

  request
    .get(requestOptions)

    .on('error', function(err) {
      console.log('An error has occurred:', err);
    })

    .on('response', function(response) {
     cb(response);
    })
}

function print(output) {
  console.log(JSON.parse(output));
}

getRepoContributors("jquery", "jquery", print);