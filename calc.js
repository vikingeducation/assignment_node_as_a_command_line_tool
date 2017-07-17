// Call corresponding function, passing arguments.
// Wrapper object for calculator.
const calc = {
	_version: 1.0,
	_helpString: 'Usage: node calc.js <cmd> <value> <value> [<cmd> <value>...]\nAvailable commands:\n--version (-v) --help (-h) add sub mult div',
	add: (left, right) => left + right,
	sub: (left, right) => left - right,
	mult: (left, right) => left * right,
	div: (left, right) => left / right
};

// Handle input (process.argv)
// Slice args
const args = process.argv.slice(2);
let command = args.shift();

let total = +args.shift();
// Extract values to be manipulated.

// Determine which command was passed.
var i = 0;
do {
	// Pull next value to apply
	let right = +args.shift();

	// Perform the math.
	total = getValue(command, total, right);
	if (isNaN(+total)) {
		console.log(total);
		break;
	}
	command = args.shift();
	if (!args.length || i == 100) break;
} while (true);

if (total) console.log(`Total: ${total}`);

function getValue(command, left, right) {
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
		case '-d':
		case '--debug':

		case '-v':
		case '--version':
			return calc._version;
		default:
			// Help
			return calc._helpString;
	}
}
