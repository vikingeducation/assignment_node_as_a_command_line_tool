const calc = require('./calc-module');
module.exports = function(command, total, args) {
	while ((calc.soloList.includes(command) && !args.length) || args.length) {
		// Pull next value to apply
		let right = '';

		// Edge case for square root, onle one argument.
		if (!calc.soloList.includes(command)) {
			right = +args.shift();
		}

		let left = total;

		// Perform the math.
		total = calc[command](left, right);
		if (isNaN(+total)) {
			break;
		}

		// Print debug
		if (calc.debug) {
			console.log(`${command} ${left} ${right} => ${total}`);
		}

		// Get next command.
		command = args.shift();
	}

	return total;
};
