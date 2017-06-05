var request = require('request');

console.log('Welcome to GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  request.get('https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors')
         .on('error', function(err) {
          console.log('An error has occurred:', err);
         })
         .on('response', function(result) {
          console.log(result);
         })
         .on('end', function() {
          console.log('Completed :D');
         })
}


getRepoContributors("jquery", "jquery");