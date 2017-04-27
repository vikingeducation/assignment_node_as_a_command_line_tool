const cp = require('child_process')

process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {

  str = str.trim();

  if (str === 'q' || str === 'quit') {
    console.log('Goodbye');
    process.exit();
  } else {
    // spawn the command
    var commandLine = str.split(' ');

    cmd = cp.spawn(commandLine[0], commandLine.slice(1));

    cmd.on('error', (err) => {
      console.error(`${ err.stack }`);
    });

    cmd.stdout.on('data', (data) => {
      console.log(`Data: ${ data }`);
    });

    cmd.stderr.on('data', (data) => {
      console.error(`STDERR: ${ data }`);
    });

  }
});
