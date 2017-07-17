const fs = require('fs');
var uInput = "";
process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', (str) => {
  str = str.trim();

  if (str === '/q') {
    // our quit funbction
OurQuit(uInput);
  } else {
uInput += str;
    console.log(str)
  }
})

OurQuit = function(userInput){
  var rndData = userInput;
  console.log(rndData);
fs.writeFile('./data/input.txt', rndData, (err) => {
  if (err) throw err;
  process.exit();

});
//process.exit()
 }
