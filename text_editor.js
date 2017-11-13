let fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

let data="";

process.stdin.on("data", function(str) {
  str = str.trim();
    
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.');
    if (fs.existsSync("dat/input.txt")) {      fs.writeFile("data/input.txt", str, (err) => {
        if (err) return console.log("error");
        console.log("test > data/input.txt");
        process.exit();
    });
  }
    };
    data += str;
});
