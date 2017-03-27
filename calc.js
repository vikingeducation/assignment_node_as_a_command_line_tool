process.stdin.resume();
process.stdin.setEncoding('utf8');

var Calculator = require('./lib/Calculator');
var calculator = new Calculator;

var commands = []

process.stdin.on('data', function(str) {
  str = str.trim();
  handleCalcInfo(str);
  // push the commands and arguments to `commands` and then do something with them

  // handle -v and -h by checking `str` before pushing to `commands` and run a *different* function to output the results


  // if (str === 'q' || str === 'quit') {
  //   console.log('Goodbye');
  //   process.exit();
  // } else {
  //   callFunction(str)
  // }
})

function handleCalcInfo(str){
  var version = /\-v|\-\-version/;
  var help = /\-h|\-\-help/;
  if (str.match(version)){
    console.log("Version: " + calculator.version)
  } else if (str.match(help)){
    console.log("Help: " + calculator.help)
  }
}
