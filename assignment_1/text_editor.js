var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var db = "";
process.stdin.on('data', function(str) {
	str = str.trim();

	if (str == '\\q') {
		console.log(db);
		fs.writeFile('./data/input.txt', db, 'utf8', function (err) {
			if (err) throw err;
			console.log("OK!");
			process.stdin.pause();
		});
	}
	else {
		db += ' ' + str;
		console.log(str);
	}
});