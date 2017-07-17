// Call corresponding function, passing arguments.
// Wrapper object for calculator.
const calc = {
	_version: 1.0,
	_helpString: 'Usage: node calc.js <cmd> <value> <value> [<cmd> <value>...]\nAvailable commands:\n--version (-v) --help (-h) add sub mult div',
	debug: false,
	add: (left, right) => left + right,
	sub: (left, right) => left - right,
	mult: (left, right) => left * right,
	div: (left, right) => left / right,
	pow: (left, right) => left ** right,
	sqrt: (left) => Math.sqrt(left)
};

// Handle input (process.argv)
// Slice args
const args = process.argv.slice(2);
let command = args.shift();


if (command === "--debug" || command === "-d") {
	command = args.shift();
	calc.debug = true;
}

let total = +args.shift();
// Extract values to be manipulated.

// Determine which command was passed.

do {
	// Pull next value to apply
	let right;

	if (command !== "sqrt") {
		right = +args.shift();
	}

	let left = total;

	// Perform the math.
	total = getValue(command, total, right);
	if (isNaN(+total)) {
		break;
	}

	if (calc.debug) {
		console.log(`${command} ${left} ${right} => ${total}`);
	}

	command = args.shift();
} while (command !== "sqrt" && !args.length);

console.log(`Total: ${total}`);

function getValue(command, left, right) {
	calc[command](left, right)

	switch (command) {
		// Add, subtract, multiply, divide.
		case 'add':
			return calc.add(left, right);
		case 'sub':
			return calc.sub(left, right);
		case 'mult':
			return calc.mult(left, right);
		case 'div':
			return calc.div(left, right);
		case 'pow':
			return calc.pow(left, right);
		case 'sqrt':
			return calc.sqrt(left);
		case '-v':
		case '--version':
			return calc._version;
		default:
			// Help
			return calc._helpString;
	}
}
