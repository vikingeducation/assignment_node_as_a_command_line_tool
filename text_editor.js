const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (str) => {
  str = str.trim();

  if (str === '/q') {
    console.log('Exiting');
    process.exit();
  } else {
    fs.appendFile('./data/messages.txt', str, (err) => {
      console.log(`Saving ${str}`);

    });

  }
});