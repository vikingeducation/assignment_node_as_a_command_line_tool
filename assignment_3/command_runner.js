const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
	str = str.trim();

	if (str === 'q' || str === 'quit') {
		console.log('END');
		process.exit();
	}
	str = str.split(' ');

	var cmd = cp.spawn(str[0], str.splice(1));

	cmd.on ('error', (err) => {
		console.error(`${ err.stack }`);
	});

	cmd.stdout.on('data', (data) => {
		console.log(data.toString());
	});

	cmd.stderr.on('data', (data) => {
		console.error("STDERR" + data);
	});

	cmd.on('close', (code) => {
		console.log(code);
	});
});