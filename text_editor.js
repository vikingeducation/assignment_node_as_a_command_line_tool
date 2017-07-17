const fs = require('fs');

process.stdin.resume();

process.stdin.setEncoding('utf8');

var log = '';

//make sure the data file is blank
fs.writeFile('./data/input.txt', '', (err) => {
  if (err) {
    console.log( err );
  }
  //else nothing
})

process.stdin.on('data', str => {


  if (str === '\\q\n') {
    console.log('Goodbye.');

    fs.appendFile('./data/input.txt', log, (err) => {
      if (err) throw err;

      console.log('The "data to append" was appended to file!');
      process.exit();
    })
  } else {
    log += str.trim() + "\n";
  }
});
