let fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');


let data = "";

process.stdin.on("data", function(str) {
  str = str.trim();
  
  if (str === '\\q' || str === '\\quit') {
    console.log('Goodbye.');

    fs.writeFile("data/input.txt", data, (err) => {
      if (err) return console.log("error");

      console.log("test > data/input.txt");
      process.exit();
    });
  };

  data += str; 

});
