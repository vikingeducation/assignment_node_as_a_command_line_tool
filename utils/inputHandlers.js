var calculatorHandlers = require('./calculatorHandlers');

var inputHandlers = {
  parseInput: function (input, debugMode, callback) {
    var commands = ['add', 'sub', 'div', 'mult', 'pow'];
    var result = calculatorHandlers.getCalculatorMethod(input[0], input[1], input[2]);
    if (debugMode) {
      console.log(input[0] + ' ' + input[1] + ' ' + input[2] + ' => ' + result);
    }
    for (var i=3; i<input.length; i++){
      if (commands.includes(input[i])){
        var oldResult = result;
        result = calculatorHandlers.getCalculatorMethod(input[i], result, input[i+1]);
        if (debugMode) {
          console.log(input[i] + ' ' + oldResult + ' ' + input[i+1] + ' => ' + result);
    }
      }
    }
    callback(result)
  }
}

module.exports = inputHandlers;
