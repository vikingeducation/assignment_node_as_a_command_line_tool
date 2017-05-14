var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();

  if (str === '\\q') {
    console.log("Exiting.");
    process.exit();
  } else {
    console.log(str);
    fs.writeFile('./data/input.txt', str, (err) => {
      if (err) console.error(err);
    });

  }
})
