var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extension, callback) {
    fs.readdir(dirPath, function (err, list) {
      if(err) return callback(err);
      var data = list.filter(function(file) {
        return path.extname(file).substring(1) === extension;
      });
      callback(null, data);
    });
}
