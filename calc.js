// Call corresponding function, passing arguments.
// Wrapper object for calculator.
const calc = {
  _version: 1.0,
  _helpString:
    'Usage: node calc.js <cmd> <value> <value> [<cmd> <value>...]' +
    '\nAvailable commands:\n--version (-v) --help (-h) add sub mult div',
  debug: false,
  add: (left, right) => left + right,
  sub: (left, right) => left - right,
  mult: (left, right) => left * right,
  div: (left, right) => left / right,
  pow: (left, right) => left ** right,
  sqrt: left => Math.sqrt(left)
};

// Handle input (process.argv)
// Slice args
const args = process.argv.slice(2);
let command = args.shift();

if (command === '--debug' || command === '-d') {
  command = args.shift();
  calc.debug = true;
} else if (command === '--help' || command === '-h') {
  console.log(calc._helpString);
  process.exit();
} else if (command === '--version' || command === '-v') {
  console.log(calc._version);
  process.exit();
}
let total = +args.shift();
// Extract values to be manipulated.

// Determine which command was passed.

while ((command === 'sqrt' && !args.length) || args.length) {
  // Pull next value to apply
  let right = '';

  if (command !== 'sqrt') {
    right = +args.shift();
  }

  let left = total;

  // Perform the math.
  total = calc[command](left, right);
  if (isNaN(+total)) {
    break;
  }

  if (calc.debug) {
    console.log(`${command} ${left} ${right} => ${total}`);
  }

  command = args.shift();
}

if (!isNaN(+total)) {
  console.log(`Total: ${total}`);
}
