var spawn = require('child_process').spawn;

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();

  if (str === 'q' || str === 'quit') {
    console.log('Shutting down.');
    process.exit();
  } else {
    str = str.split(' ');

    var command = str.shift();
    var args = str.join(' ');

    var cmd = spawn(command, [args]);

    cmd.on('error', (err) => {
      console.error(`${ err.stack }`);
    });

    cmd.stdout.on('data', (data) => {
      console.log(`${ data }`);
    });

    cmd.stderr.on('data', (data) => {
      console.error(`STDERR: ${ data }`);
    });

    cmd.on('close', (code) => {
      console.log(`Child process exited with code: ${ code }`);
    });
  }
});
