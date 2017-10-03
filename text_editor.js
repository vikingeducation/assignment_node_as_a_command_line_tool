const fs = require('fs');

const path = './data/input.txt';
var wholeInput = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

// setup listener on input stream (stdin)
process.stdin.on('data', userInput => {
	var userInput = userInput.trim();

	// if quit condition is reached
	if (userInput === '\\q') {
		//then output
		console.log(`\nYour input is: ${wholeInput}`);
		process.exit();
	} else {
		// otherwise keep appending to file
		wholeInput = wholeInput + '\n' + userInput;
		fs.appendFile(path, `${userInput}\n`, err => {
			if (err) throw err;
		});
	};
});

