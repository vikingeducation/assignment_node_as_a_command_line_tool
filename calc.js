const calc = require('./modules/calc-module');
const getValue = require('./modules/calc-loop');

// Handle input (process.argv)
// Slice args
const args = process.argv.slice(2);
let command = args.shift();

switch (command) {
	case '--debug':
	case '-d':
		command = args.shift();
		calc.debug = true;
		break;
	case '--help':
	case '-h':
		console.log(calc._helpString);
		process.exit();
		break;
	case '--version':
	case '-v':
		console.log(calc._version);
		process.exit();
		break;
	case '--interactive':
	case '-i':
		break;
}

if (args[args.length - 1] === '--help' || args[args.length - 1] === '-h') {
	helpVar = command + 'Help';
	console.log(calc[helpVar]);
	process.exit();
}
let total = +args.shift();

total = getValue(command, total, args);

if (!isNaN(+total)) {
	console.log(`Total: ${total}`);
} else {
	console.log('You fool, learn to type!');
}
