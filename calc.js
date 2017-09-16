const operators = {
  add: '+',
  sub: '-',
  mult: '*',
  div: '/',
  pow: 'pow',
  sqrt: 'sqrt'
};
var version = '1.0.0';
var help = `Command-Line Calculator
=======================
Perform calculations and receive the result on the
command-line. You may chain commands together.

The following commands are available:
  Addition:       add (a) (b)
  Subtraction:    sub (a) (b)
  Multiplication: mult (a) (b)
  Division:       div (a) (b)
  Exponents:      pow (a) (b)
  Square root:    sqrt (a)`;

let debugMode = false;
let args = process.argv.slice(2, process.argv.length);
let i = 0;

if (args[0] === '-v' || args[0] === '--version') {
  console.log(version);
} else if (args[0] === '-h' || args[0] === '--help') {
  console.log(help);
} else {
  if (args[0] === '-d' || args[0] === '--debug') {
    debugMode = true;
    i += 1;
  };
  let a = args[i + 1];
  let b = args[i + 2];
  let func = [args[i]];
  let operator = operators[func];
  var result;
  var expression;

  if (operator === 'pow') {
    result = Math.pow(a,b);
    i += 3;
  } else if (operator === 'sqrt') {
    result = Math.sqrt(a);
    b = '';
    i += 2;
  } else {
    expression = a + operator + b;
    result = eval(expression);
    i += 3;
  };

  if (debugMode) {
    console.log(`${func} ${a} ${b} => ${result}`);
  };

  while (i < args.length) {
    a = result;
    b = args[i + 1];
    func = args[i];
    operator = operators[func];

    if (operator === 'pow') {
      result = Math.pow(a,b);
    } else if (operator === 'sqrt') {
      result = Math.sqrt(a);
      b = '';
      i += 1;
    } else {
      expression = a + operator + b;
      result = eval(expression);
      i += 2;
    };

    if (debugMode) {
      console.log(`${func} ${a} ${b} => ${result}`);
    };
  };
  console.log(result);
};
