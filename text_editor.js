const fs = require('fs');

const path = './data/input.txt';
var wholeThing = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', str => {
	var str = str.trim();

	if (str === '\\q') {
		console.log(wholeThing);
		process.exit();
	} else {
		wholeThing = wholeThing + '\n' + str;
		fs.appendFile(path, `${str}\n`, err => {
			if (err) throw err;
		});
	};
});

