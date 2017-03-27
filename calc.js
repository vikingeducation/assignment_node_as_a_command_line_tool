var calculatorHandlers = require('./utils/calculatorHandlers');
var inputHandlers = require('./utils/inputHandlers');

if (process.argv[2] === '-d' || process.argv[2] === '--debug') {
  var debugMode = true;
  var input = process.argv.slice(3);
} else {
  var debugMode = false;
  var input = process.argv.slice(2);
}


calculatorHandlers.handleCalcInfo(input[0], function(f){
  console.log(f);
  process.exit();
});



inputHandlers.parseInput(input, debugMode, function(result){
  console.log(result)
});


