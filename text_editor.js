const fs = require('fs');

process.stdin.resume();

process.stdin.setEncoding('utf8');

let buffer = ''

process.stdin.on('data', function(str) {

  str = str.trim();

  if (str === '\\q') {

    if (!fs.existsSync('data')) {
      fs.mkdirSync('data')
    }

    fs.appendFileSync('data/input.txt', buffer, (err) => {
      if (err) {
        console.log(`Error: ${err}`);
        throw err;
      } else {
        console.log('The "data to append" was appended to file!');
      }
    });
    process.exit();
  } else {
    // collect the input
    buffer = buffer.concat(str);
    buffer = buffer.concat(`\n`);
  }
});
