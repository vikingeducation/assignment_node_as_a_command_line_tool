const cp = require('child_process');

// let cmd = cp.spawn('ps', ['aux']);

// cmd.stdout.on('data', (data) => {
// 	console.log(`Data: ${ data }`);
// })

cp.exec('ps "aux"', (err, stdout, stderr) => {
	if (err) {
		throw err;
	}

	if (stderr) {
		console.error(`stderr: ${ stderr }`);
	}

	console.log(`stdout: ${ stdout }`);
});

