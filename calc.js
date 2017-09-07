const calFuncs = require('./calc_functions.js');
const fs = require('fs');

const version = '1.0.0';

process.stdin.resume();
process.stdin.setEncoding('utf8');

const firstArg = process.argv[2];

// if starts with flag
if (firstArg && firstArg.startsWith('-')) {
  if (calFuncs.checkForValidFlag(firstArg)) {

    if (firstArg === '-h' || firstArg === '--help') {
      fs.readFile('./data/calc_help.txt', 'utf8', (err, data) => {
        console.log(data);
        process.exit();
      });
    } else if (firstArg === '-v' || firstArg === '--version') {
      console.log(`Verion: ${ version }`);
      process.exit();
    }
  } else {
    console.error(`'${ firstArg }' is not a valid flag`);
    process.exit();
  }

} else if (firstArg) { // no flag

  if (calFuncs.checkForValidOperation(firstArg)) {
    var firstNum = parseInt(process.argv[3]);
    var secondNum = parseInt(process.argv[4]);

    if (firstNum && secondNum) {
      var answer = calFuncs.calc(firstArg, firstNum, secondNum);
      console.log(answer);
      process.exit();
    } else {
      console.error('You need to enter two numbers after the operation');
      process.exit();
    }
  }
} else {
  console.error("You need to pass an operation followed by two number to use the calculator");
  process.exit();
}

// if starts with operation (add, sub, div or mult)
  // if there aren't 2 numbers after the operation
    // log an error
    // pause the process

  // create a var 'answer'
  // create a var 'endOfOperations' set to false

  // perform initial calculation
  // update answer


  // if there is a next argument

    // while endOfOperations === false
      // if the one after the operation is a number
        // perform calculation
        // update answer

        // unless next argument after number is an operation
          // endOfOperations = true
          // log the final answer
          // pause the process for another operation!

  // else there is no more arguments
    // log the final answer
    // pause the process for another operation!



