cp = require("child_process");

// var ps = cp.spawn("ps", ["-aux"]);

// ps.stdout.on("data", function(data) {
// 	console.log(data.toString());
// });

// ps.stderr.on("data", function(err) {
// 	console.log(err.toString());
// });

// ps.on("error", function(err) {
// 	console.log(err.stack);
// });

// ps.on("close", function(code) {
// 	console.log(code);
// });

var ps = cp.exec("ps -aux", function(err, stdout, stderr) {
	if (err) {
		console.log(err.stack);
	}

	if (stderr) {
		console.log(stderr.toString());
	}

	console.log(stdout.toString());
});

ps.on("exit", function(code) {
	console.log(code);
});