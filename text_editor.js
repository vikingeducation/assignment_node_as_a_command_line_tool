const fs = require('fs');

process.stdin.resume();

process.stdin.setEncoding('utf8');

var log = '';

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
};


