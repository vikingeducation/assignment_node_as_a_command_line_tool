var cp = require('child_process')
var fs = require('fs')

process.stdin.resume();
process.stdin.setEncoding('utf8');

var user_input = '';

process.stdin.on('data', str => {
  str = str.trim();

  if (str === '\\q') {
        fs.writeFile('./data/input.txt', user_input, function(err){
            if (err) {
              console.log(err)
            } else {
              console.log("File Written")
              process.exit()
            }
        })
  } else {
    user_input += str;
  }

})
