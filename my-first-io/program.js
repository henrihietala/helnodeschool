var fs = require('fs');

var filepath = process.argv[2]; // filepath will be passed as an argument

var text = fs.readFileSync(filepath).toString();
var lineCount = text.split('\n').length - 1;

console.log(lineCount);
