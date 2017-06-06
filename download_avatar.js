var request = require('request');

var downloadIMG = require('./download-image-by-url');

console.log('Welcome to GitHub Avatar Downloader!');

var GITHUB_USER = 'Nombiezinja';
var GITHUB_TOKEN = '7e8cbab3e97fe6f54dfab6d362123fafc3afbfbb';

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors'

  var requestOptions = {
    headers:{
      'user-agent':'ti'
    },
    url: requestURL
  } //for the RequestOptions variable

  request.get(requestOptions, function(err, response, body) {

    if (err) {console.log('error', err)};

    console.log('statusCode:', response && response.statusCode);

    cb(body);

  }); //request.get

} //function getRepoContributors



getRepoContributors('jquery', 'jquery', function loop(result) {

  JSON.parse(result).forEach (function(element) {
      var url = element.avatar_url;
      var filePath = element.login + '.jpg';
      console.log(' url is ', url);
      console.log(' file path is ', filePath);
      downloadIMG(url, filePath);
  });

});