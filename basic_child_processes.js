var cp = require('child_process');
var aux = [ process.argv[2] ]

var cmd = cp.spawn('ps', aux);

cmd.on('error', (err) => {
  console.error(err.stack);
});

cmd.stdout.on('data', (data) => {
  console.log(`${data} was correctly outputed`);
});

cmd.stderr.on('data', (data) => {
  console.error(`STDERR: ${ data }`);
});

cmd.on('close', (code) => {
  console.log(`Child process exited with code: ${ code }`);
});
