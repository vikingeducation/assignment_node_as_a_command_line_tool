let fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", function(str) {
  str = str.trim();
  let txt;
    
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.');
    if (fs.existsSync("data/input.txt")) {      fs.writeFileSync("data/input.txt", txt, (err) => {
        if (err) return console.log("error");
        console.log("test > data/input.txt");
  });
  }
    process.exit();
  };
    
 txt = str;
    
});
