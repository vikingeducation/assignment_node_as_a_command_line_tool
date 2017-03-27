process.stdin.resume();
process.stdin.setEncoding('utf8');

var Calculator = require('./lib/Calculator');
var calculator = new Calculator;

var input = process.argv.slice(2);
// input[1] = parseInt(input[1]);
// input[2] = parseInt(input[2]);
var commands = ['add', 'sub', 'div', 'mult'];
function parseInput(input) {
  var result = [];
  input.forEach(command) {
    if (commands.includes(command)) {
      
    }
  }
}

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

