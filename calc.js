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

} else if (firstArg) {

  if (calFuncs.checkForValidOperation(firstArg)) {

    const argsPassed = process.argv;

    var firstNum = parseInt(argsPassed[3]);
    var secondNum = parseInt(argsPassed[4]);
    var answer;

    if (firstNum && secondNum) {
      answer = calFuncs.calc(firstArg, firstNum, secondNum);

      var index = 5;


      if (argsPassed[index]) { // argument after first three
        if (!calFuncs.checkForValidOperation(argsPassed[index]) && isNaN(argsPassed[index])) {
          console.error(`Command '${ argsPassed[index] }' not recognized. Use --help for info.`);
          process.exit();
        } else if (parseInt(argsPassed[index])) { // three numbers entered
          console.error('You can only enter two numbers after the first operation');
          process.exit();
        }
      }

      while (calFuncs.checkForValidOperation(argsPassed[index]) && parseInt(argsPassed[index + 1])) { // there is an operation and number

        // check later arguments for errors
        if (argsPassed[index + 2] && !calFuncs.checkForValidOperation(argsPassed[index + 2]) && isNaN(argsPassed[index + 2])) {
          console.error(`Command '${ argsPassed[index + 2] }' not recognized. Use --help for info.`);
          process.exit();
        } else if (argsPassed[index + 2] && !calFuncs.checkForValidOperation(argsPassed[index + 2]) && !isNaN(argsPassed[index + 2])) {
          console.error('You can only enter one number per chained operation');
          process.exit();
        } else if (argsPassed[index + 2] && calFuncs.checkForValidOperation(argsPassed[index + 2]) && !parseInt(argsPassed[index + 3])) {
          console.error(`You must enter a number after an operation`);
          process.exit();
        }

        // recalculate answer
        answer = calFuncs.calc(argsPassed[index], answer, parseInt(argsPassed[index + 1]));
        index += 2;
      }

      console.log(answer);
      process.exit();
    } else {
      console.error('You need to enter two numbers after the operation');
      process.exit();
    }
  } else {
    console.error('You need to enter a valid operation and two numbers. Use --help for more info.');
    process.exit();
  }
} else {
  console.error("You need to pass an operation followed by two numbers to use the calculator");
  process.exit();
}
