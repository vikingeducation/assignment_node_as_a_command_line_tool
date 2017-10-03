const fs = require('fs');

const path = './data/input.txt';
var wholeInput = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

// setup listener on input stream (stdin)
process.stdin.on('data', str => {
	var str = str.trim();

	// if quit condition is reached
	if (str === '\\q') {
		//then output
		console.log(`\nYour input is: ${wholeInput}`);
		process.exit();
	} else {
		// otherwise keep appending to file
		wholeInput = wholeInput + '\n' + str;
		fs.appendFile(path, `${str}\n`, err => {
			if (err) throw err;
		});
	};
});

