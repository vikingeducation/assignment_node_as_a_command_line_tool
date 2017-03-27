var calculatorHandlers = require('./utils/calculatorHandlers');
var inputHandlers = require('./utils/inputHandlers');

var input = process.argv.slice(2);

calculatorHandlers.handleCalcInfo(input[0], function(f){
  console.log(f);
  process.exit();
});

inputHandlers.parseInput(input, function(result){
  console.log(result)
});


