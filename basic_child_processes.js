const cp = require('child_process');

var arg = process.argv[2];

if (arg) {
  // var cmd = cp.spawn('ps', [arg]);

  // cmd.on('err', (err) => {
  //   console.err(`${ err.stack }`);
  // });

  // cmd.stdout.on('data', (data) => {
  //   console.log(`STDOUT: ${ data }`);
  // });

  // cmd.stdin.on('data', (data) => {
  //   console.log(`STDIN: ${ data }`);
  // });

  var cmd = cp.exec(`ps ${ arg }`, (err, stdout, stderr) => {
    if (err) {
      console.error(err.stack);
      console.error(`Error Code: ${ err.code }`);
      console.error(`Signal received: ${ err.signal }`);
    }

    if (stderr) {
      console.error(`Child process STDERR: ${ stderr }`);
    } else {
      console.log(`Child process STDOUT:\n${ stdout }`);
    }
  });
} else {
  console.error('You must enter an aux argument after the file name');
  process.exit();
}
