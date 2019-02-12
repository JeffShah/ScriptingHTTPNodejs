var https = require('https'); // We need to set up https here to require data in cmd
var getData = "";

function getAndPrintHTML (host, path) {
console.log(host, path);

  var requestOptions = {
    host: host,// can be any website or link, but in our case it is already given a link
    path: path
  };
/* Add your code here */
https.get(requestOptions, function (response) {

  response.setEncoding('utf8');// is a variable width character encoding: https://en.wikipedia.org/wiki/UTF-8

response.on('data', function(data) {
getData += data;
  console.log(getData);

});

response.on('end', function() {
  console.log('Response stream complete.');
});

});

}
// we need to console.log to call in the data we are requiring
console.log(getAndPrintHTML('sytantris.github.io', '/http-examples/step2.html'));
// console.log(getAndPrintHTML('google.com', path)); or etc... we can keep adding more and more console.log to get various types of data.
//console.log(getAndPrintHTML('host', 'path'));
//console.log(getAndPrintHTML('host', 'path'));
//console.log(getAndPrintHTML('host', 'path'));
//console.log(getAndPrintHTML('host', 'path'));
//console.log(getAndPrintHTML('host', 'path'));
//console.log(getAndPrintHTML('host', 'path'));
//console.log(getAndPrintHTML('host', 'path'));
//console.log(getAndPrintHTML('host', 'path')); like this..... with different host names and path names.
