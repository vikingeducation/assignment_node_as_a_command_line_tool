let args = process.argv.slice(2, process.argv.length);

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

if (args[0] === '-v' || args[0] === '--version') {
  console.log(version);
} else if (args[0] === '-h' || args[0] === '--help') {
  console.log(help);
} else {
  let operator = operators[args[0]];
  let expression = args[1] + operator + args[2];
  let result = eval(expression);
  let i = 3;

  while (i < args.length) {
    operator = operators[args[i]];
    expression = result + operator + args[i+1];
    result = eval(expression);
    i += 2;
  }
  console.log(result);
};
