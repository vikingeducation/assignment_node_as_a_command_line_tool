var fs = require('fs');
var user_input = '';
process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {


  if (str.trim() === '\\q') {

    fs.appendFile('./data/input.txt', user_input, (err) => {
      if (err) throw err;
      console.log("it's saved");
      console.log('Goodbye');
      process.exit();
    });

  } else {
    user_input += str;
  }

});