let fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", function(str) {
  str = str.trim();
  
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.');
    process.exit();
  } 
  fs.writeFile("data/input.txt", str, (err) => {
    if (err) return console.log("error");
  });

});
