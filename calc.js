process.stdin.resume();
process.stdin.setEncoding('utf8');

var Calculator = require('./lib/Calculator');
var calculator = new Calculator;

var input = process.argv.slice(2);
// input[1] = parseInt(input[1]);
// input[2] = parseInt(input[2]);
var commands = ['add', 'sub', 'div', 'mult'];

function parseInput(input) {
  var result = calculatorHandlers.getCalculatorMethod(input[0], input[1], input[2]);

  for (var i=3; i<input.length; i++){
    if (commands.includes(input[i])){
      result = calculatorHandlers.getCalculatorMethod(input[i], result, input[i+1])
    }
  }
  console.log("Result: " + result);
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
  },

  getCalculatorMethod: function(str, a, b){
    a = parseInt(a);
    b = parseInt(b);
    switch(str){
      case 'add':
        return(this.add(a,b))
        break;
      case 'sub':
        return(this.sub(a,b))
        break;
      case 'mult':
        return(this.mult(a,b))
        break;
      case 'div':
        return(this.div(a,b))
        break;
    }
  }
}


if (calculatorHandlers.handleCalcInfo(input[0])) {
  console.log("Works!")
} else {
  parseInput(input)
}
process.exit();

