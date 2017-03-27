var calculatorHandlers = require('./calculatorHandlers');

var inputHandlers = {
  parseInput: function (input,callback) {
    var commands = ['add', 'sub', 'div', 'mult'];
    var result = calculatorHandlers.getCalculatorMethod(input[0], input[1], input[2]);

    for (var i=3; i<input.length; i++){
      if (commands.includes(input[i])){
        result = calculatorHandlers.getCalculatorMethod(input[i], result, input[i+1])
      }
    }
    callback(result)
  }
}

module.exports = inputHandlers;
