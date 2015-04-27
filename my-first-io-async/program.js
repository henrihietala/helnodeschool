var fs = require('fs');

var filepath = process.argv[2]; // filepath will be passed as an argument

var text = fs.readFile(filepath, function (err, data) {
    if(err) return;
    var lineCount = data.toString().split('\n').length - 1;
    console.log(lineCount);
});
