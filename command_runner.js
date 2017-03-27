const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  data = data.trim();
  if (data === 'q' || data === 'quit') {
    console.log('Goodbye!');
    process.exit();
  }
  parsedInput = parseInput(data);
  spawnChildProcess(parsedInput.command, parsedInput.args);
});

function spawnChildProcess(command, args) {
  let cmd = cp.spawn(command, args);

  cmd.on('error', (error) => {
    console.error(`Error: ${error}`);
  });

  cmd.stdout.on('data', (data) => {
  	console.log(`Data: ${data}`);
  });

  cmd.stderr.on('data', (data) => {
  	console.error(`Error: ${data}`);
  });
}

function parseInput(input) {
	let arr = input.split(" ");
	let command = arr[0];
	let args = arr.slice(1);
	return {
		command: command,
		args: args
	};
}
