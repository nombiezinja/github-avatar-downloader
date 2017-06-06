var request = require('request');

console.log('Welcome to GitHub Avatar Downloader!');

var GITHUB_USER = 'Nombiezinja';
var GITHUB_TOKEN = '7e8cbab3e97fe6f54dfab6d362123fafc3afbfbb';

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors'

  var requestOptions = {
    headers:{
      "user-agent":"ti"
    },
    url: requestURL
  } //for the RequestOptions variable

  request.get(requestOptions, function(err, response, body) {

    console.log('error', err);

    console.log('statusCode:', response && response.statusCode);

    var output = JSON.parse(body);
    // console.log(output)
    // console.log(typeof output)
    output.forEach (function(element) {
      console.log(element.avatar_url);
    });




  }); //request.get

} //function getRepoContributors


// function print(output) {
//   console.log(JSON.parse(output));
// }


getRepoContributors("jquery", "jquery", function print(output) {
  console.log(JSON.parse(output));
});