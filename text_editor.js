const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var allInput = "";
process.stdin.on('data', function(data){
	data = data.trim();
	if (data === "\\q") {
		fs.writeFile("./data/input.txt", allInput, "utf8", function(err){
			if (err) {
				throw err;
			}
			process.exit();
		});
	} else {
		allInput += data + "\n";
	}
});
