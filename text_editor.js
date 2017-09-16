var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var userInput = '';

process.stdin.on('data', function(str) {

  if (str.trim() === '\\q') {
    fs.writeFile('./data/input.txt', userInput, function(err) {
      if (err) throw err;
      console.log('Saved!');
      process.exit();
    });
  } else {
    userInput += str;
  }
});
