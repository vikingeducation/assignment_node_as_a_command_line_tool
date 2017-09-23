const fs = require('fs')

process.stdin.resume();
process.stdin.setEncoding('utf8');


let message = '';

process.stdin.on('data', (input) => {
  input = input.trim();

  if (input === '\\q' || input === 'quit') {
    fs.writeFile('./data/input.txt', message, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('The file has been saved.');
        console.log('Goodbye');
        process.exit();
      }
    });
  }

  message += input;
});
