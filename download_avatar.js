var request = require('request');

var downloadIMG = require('./download-image-by-url');

console.log('Welcome to GitHub Avatar Downloader!');

//user and key
var GITHUB_USER = 'Nombiezinja';
var GITHUB_TOKEN = '7e8cbab3e97fe6f54dfab6d362123fafc3afbfbb';

function getRepoContributors(repoOwner, repoName, cb){

  //conditional statement to return feedback in case no argument or only one argument was entered in command line
  if (!repoOwner || !repoName) {
    console.log ("Please enter the owner of the repository, then the name of the repository, in that order. ");
  } else {

    //constructing url for get
    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

    //adding user-agent to mimic browser HTTP request header
    var requestOptions = {
      headers: {
        'user-agent': 'ti'
      },
      url: requestURL
    };  //for the RequestOptions variable

    //request body
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


//callback function used to first parse returned output, then loop over it to select avatar_url and login
//in order to perform the downloadIMG function, which was required from another file

var loop = function(result){

  JSON.parse(result).forEach(function(element){
    var url = element.avatar_url;
    var filePath = element.login + '.jpg';
    console.log('Downloading avatar for ' + element.login);
    downloadIMG(url, filePath);
  });

};

getRepoContributors(process.argv[2], process.argv[3], loop);