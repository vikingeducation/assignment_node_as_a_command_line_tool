const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', (input) => {

  input = input.trim();

  if (input === '\\q' || input === 'quit') {
    console.log('Exit process');
    process.exit();
  }

  input = input.split(' ');

  const cmd = cp.spawn(input[0], input.slice(1));

  cmd.on('error', (err) => {
    console.error(err);
  });

  cmd.stdout.on('data', (data) => {
    console.log(`STDOUT: ${data}`);
  });

  cmd.stderr.on('data', (data) => {
    console.log(`STDERR: ${data}`);
  });

  cmd.on('close', (code) => {
    console.log(`Closing with the code: ${code}`);
  });


});
