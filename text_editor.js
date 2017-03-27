const fs = require('fs');

console.log("Started process");
process.stdin.resume();

// Set the character encoding
process.stdin.setEncoding('utf8');

var input = '';

// Listen to the data event
process.stdin.on('data', function(str) {
  str = str.trim();

  var path = './data/input.txt';

  // If the user wishes to quit
  // exit the process
  if (str === '\\q') {

    process.exit();

  } else {
    // Else output the input
    input += str;
    console.log(input);
  }
});
