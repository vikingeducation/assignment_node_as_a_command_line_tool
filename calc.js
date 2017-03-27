var calculatorHandlers = require('./utils/calculatorHandlers');
var inputHandlers = require('./utils/inputHandlers');

if  (process.argv[2] === '-i' || process.argv[2] === '--interactive'){
  var result = null;

  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function(str) {

    str = str.trim();
    if (str === 'done') {
      console.log('Goodbye');
      process.exit();
    } else {
      var input = str.split(' ');
      if (input.length < 3){
        input = [input[0], result, input[1]]
      }
      console.log(input)
      inputHandlers.parseInput(input, debugMode, function(res){
        console.log(res)
        result = res
        return res
      })

    }

  });







} else {

  if (process.argv[2] === '-d' || process.argv[2] === '--debug') {
    var debugMode = true;
    var input = process.argv.slice(3);
  } else {
    var debugMode = false;
    var input = process.argv.slice(2);
  }

  calculatorHandlers.handleCalcInfo(input[0], input[1], function(f){
    console.log(f);
    process.exit();
  });



  inputHandlers.parseInput(input, debugMode, function(result){
    console.log(result)
  });

}




