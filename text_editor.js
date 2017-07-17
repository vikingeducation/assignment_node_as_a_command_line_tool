fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf8");

var userData = "";

process.stdin.on("data", function(data) {
	if (data === '\\q\n') {

		console.log(userData);
		
		fs.writeFile("./data/input.txt", userData, "utf8", function(err) {
			if (err) throw err;
		});

		console.log("Goodbye! :)");
		process.stdin.pause();
	} else {
		console.log(data);
		userData += data;
	}
});