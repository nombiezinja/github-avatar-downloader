var request = require('request');

var downloadIMG = require('./download-image-by-url');

console.log('Welcome to GitHub Avatar Downloader!');

var GITHUB_USER = 'Nombiezinja';
var GITHUB_TOKEN = '7e8cbab3e97fe6f54dfab6d362123fafc3afbfbb';

function getRepoContributors(repoOwner, repoName, cb){

  if (!repoOwner || !repoName) {
    console.log ("Please enter the owner of the repository, then the name of the repository, in that order. ");
  } else {

    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

    var requestOptions = {
      headers: {
        'user-agent': 'ti'
      },
      url: requestURL
    };  //for the RequestOptions variable

    request.get(requestOptions, function(err, response, body){

      if (err) {
        console.log('error', err);
      }

      console.log('statusCode:', response && response.statusCode);

      cb(body);

      console.log('Download complete, please check your directory :)');

    } ); //request.get

  }

} //function getRepoContributors


var loop = function(result){

  JSON.parse(result).forEach(function(element){
    var url = element.avatar_url;
    var filePath = element.login + '.jpg';
    console.log('Downloading avatar for ' + element.login);
    downloadIMG(url, filePath);
  });

};

getRepoContributors(process.argv[2], process.argv[3], loop);