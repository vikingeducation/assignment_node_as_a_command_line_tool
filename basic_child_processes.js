var cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8')

var cmd = cp.spawn('ps', [ 'aux' ]);

cmd.stdout.on('data', (data) => {
  console.log('data: ' + data);
});

cmd.stderr.on('data', (data) => {
  console.error('err: ' + data);
});

cmd.on('close', (code) => {
  console.log('child process exited with: ' + code);
});