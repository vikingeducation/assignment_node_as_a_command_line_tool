process.stdin.resume();
process.stdin.setEncoding('utf8');

var Calculator = require('./lib/Calculator');
var calculator = new Calculator;

var input = process.argv.slice(2);
input[1] = parseInt(input[1]);
input[2] = parseInt(input[2]);

// process.stdin.on('data', function(str) {
//   str = str.trim();
//   if (calculatorHandlers.handleCalcInfo(str)) {
//     process.exit();
//   } else {
//     var commands = []
  // handle str if it's not -v or -h
  // str looks something like "add 5 5"
    


  // }

  // // push the commands and arguments to `commands` and then do something with them
  //  commands = [
  //  {'add': [1,2]},
  //  {'add': [3,4]}
  //  ]



  // if (str === 'q' || str === 'quit') {
  //   console.log('Goodbye');
  //   process.exit();
  // } else {
  //   callFunction(str)
  // }
// })

var calculatorHandlers = {
  // refactor the returns here
  handleCalcInfo: function(str){
    var version = /\-v|\-\-version/;
    var help = /\-h|\-\-help/;
    if (str.match(version)){
      console.log("Version: " + calculator.version);
      return true
    } else if (str.match(help)){
      console.log("Help: " + calculator.help)
      return true
    } else {
      return false;
    }
  },

  add: function(a, b){
    return a + b;
  },

  sub: function(a, b){
    return a - b;
  },

  div: function(a, b){
    return a / b;
  },

  mult: function(a, b){
    return a * b;
  }
}

if (calculatorHandlers.handleCalcInfo(input[0])) {
  console.log("Works!")
} else {
  switch (input[0]) {
    case 'add':
    console.log(calculatorHandlers.add(input[1], input[2]));
    break;
    case 'sub':
    console.log(calculatorHandlers.sub(input[1], input[2]));
    break;
    case 'div':
    console.log(calculatorHandlers.div(input[1], input[2]));
    break;
    case 'mult':
    console.log(calculatorHandlers.mult(input[1], input[2]));
    break;
    default:
    console.log("Invalid command");
  }
  process.exit();
}

