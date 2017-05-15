const fs = require('fs');

// set up listener using process.stdin
// if user types "q", exit"
// when user types, add that to a variable
// when user quits, save variable to data/input.txt

process.stdin.resume();
process.stdin.setEncoding('utf8');

var message = "";

process.stdin.on('data', (str) => {
  str = str.trim();
  if (str !== '\\q') {
    message += str.trim();
  } else {
    fs.writeFile('data/input.txt', message, 'utf8', (err) =>{
      if (err) throw err;
      console.log("The file 'input.txt' has ben successfully saved.");
      process.exit();
    });
  }
});