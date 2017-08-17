var fs = require('fs');
var everythingTyped = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (str) => {
  str = str.trim();
  if (str === '\\q'){
    fs.writeFile( `${__dirname}/data/input.txt`, everythingTyped, function (err) {
      if (err) throw err;
      console.log('Saved!');
      });
    process.stdin.pause();
  }
  else {
    everythingTyped += str;
    console.log(everythingTyped);
  }
})
