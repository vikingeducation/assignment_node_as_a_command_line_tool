// use process.argv array to get user's commands and arguments
var args = process.argv.slice(2, process.argv.length);

// map user input to operators with an object
const operators = {
  add: '+',
  sub: '-',
  mult: '*',
  div: '/'
};

var version = '1.0.0';
var help = `Command-Line Calculator
=======================
Use commands and arguments to perform calculations
and receive the result in the command-line.

The following commands are available:
  Addition:       add (a) (b)
  Subtraction:    sub (a) (b)
  Multiplication: mult (a) (b)
  Division:       div (a) (b)`;

// if userinput is -v or --version or -h or --help, show relevant info
// otherwise evaluate function and arguments and return result
if (args[0] === '-v' || args[0] === '--version') {
  console.log(version);
} else if (args[0] === '-h' || args[0] === '--help') {
  console.log(help);
} else {
  let operator = operators[args[0]];
  let expression = args[1] + operator + args[2];
  console.log(eval(expression));
}


function myCalc(operator, arg1, arg2) {

  return eval(arg1,operator,arg2);
}

// store output of previous subcommand in variable and forward
// to next subcommand to allow subcommand chaining
