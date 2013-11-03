var nmrpi = require('nmr-pi');
var mkdirp = require('mkdirp');

mkdirp(__dirname +'/nmrcontrollers', function(err) {
  if(err) {
    console.log(err);
  }
});

var config = {
  port: 8888,
  folderPath: __dirname + '/nmrcontrollers'
};

nmrpi.start(config);
// console.log('IT HAS BEGUN');
