const spawn = require('child_process').spawn;

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (str) => {
  str = str.trim();
  if (str === 'q' || str === 'quit') {
    process.exit();
  } else {
    // Splits user input into an array 
    let input = str.split(' ');

    // seperates into user command and arguments
    var command = input[0];
    var args = input.slice(1, input.length);

    var cmd = spawn(command, args);

    cmd.on('error', (err) => {
      console.error(`${ err.stack }`);
    });

    cmd.stdout.on('data', (data) => {
      console.log(`Data: \n ${ data }`);
    });

    cmd.stderr.on('data', (data) => {
      console.error(`STDERR: ${ data }`);
    });

    cmd.on('close', (code) => {
      console.log(`Child process exited with code: ${ code }`);
    });
  }
});