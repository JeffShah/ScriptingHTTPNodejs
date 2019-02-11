var https = require('https'); // We need to set up https here to require data in cmd
var getData = "";

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',// can be any website or link, but in our case it is already given a link
    path: '/http-examples/step2.html'
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
console.log(getAndPrintHTML());// we need to console.log to call in the data we are requiring