var fs = require('fs');
var textPath = './data/input.txt';

function done() {
  console.log('Goodbye.');
  process.exit();
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.');
    process.stdin.pause();
  } else {
    fs.appendFile(textPath, `${str}\n`, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
});


process.on('SIGINT', done);




