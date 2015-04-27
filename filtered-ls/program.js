var fs = require('fs');
var path = require('path');

var dirpath = process.argv[2];
var extension = process.argv[3];

var text = fs.readdir(dirpath, function (err, list) {
    if(err) return;
    list.forEach(function(file) {
      if(path.extname(file).substring(1) === extension) {
        console.log(file);
      }
    });
});
